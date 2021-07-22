import React, {useState} from 'react'
import { ListWrapper, ListTitle, ListFieldWrapper, ListFieldText, ListFieldEditBtn, ListFieldDeleteBtn, ListFieldReorderBtn, ListDragContainer, ListFieldExpandedWrapper, ListFieldExpandedCloseBtn, ListFieldExpandedOptionWrapper, ListFieldExpandedTitle, ListFieldExpandedDropdown, ListFieldExpandedDropdownOption, ListFieldExpandedTextInput } from './ListElements'

const ListElement = ({title, fields, onUpdate }) => {

	const [fieldList, setFieldList] = useState(fields || [])

	const [activeField, setActiveField] = useState(undefined)

	const [activeFieldInputs, setActiveFieldInputs] = useState(undefined) //['a', 'b', 'c', 'd']

	const [draggedItem, setDraggedItem] = useState(undefined)

	const onDragStart = (event, index) => {
		setDraggedItem(fieldList[index])
		event.dataTransfer.effectAllowed = 'move'
		event.target.parentNode.classList.add('dragging')
		event.dataTransfer.setData('text/html', event.target.parentNode)
		event.dataTransfer.setDragImage(event.target.parentNode, 20, 20)
	}
	const onDragOver = (index) => {
		const item = fieldList[index]
		if (draggedItem === item) return
		let items = fieldList.filter(item => !Object.is(item, draggedItem))
		items.splice(index, 0, draggedItem)
		setFieldList(items)
	}
	const onDragEnd = e => {
		e.target.parentNode.classList.remove('dragging')
		setDraggedItem(undefined)
	}

	return (
		<ListWrapper>
			<ListTitle>{title}</ListTitle>
			{
				fieldList.map((field, index) => {
					return (
					<>
						<ListFieldWrapper>
							<ListFieldText>{field.name}</ListFieldText>
							<ListDragContainer draggable onDragStart={(e) => onDragStart(e, index)} onDragEnd={onDragEnd} onDragOver={() => onDragOver(index)}>
								<ListFieldReorderBtn />
							</ListDragContainer>
							<ListFieldEditBtn onClick={() => setActiveField(activeField === index ? undefined : index)}/>
							<ListFieldDeleteBtn onClick={() => {
								let copy = fieldList.slice()
								copy.splice(index, 1)
								setFieldList(copy)
							}}/>
						</ListFieldWrapper>
						<ListFieldExpandedWrapper isopen={activeField === index}>
							<ListFieldExpandedCloseBtn isopen={activeField === index} onClick={() => setActiveField(undefined)}/>
							{
								field.options.map(option => {
									return (
										<ListFieldExpandedOptionWrapper>
											<ListFieldExpandedTitle>{option.name}</ListFieldExpandedTitle>
											{
												option.isDropdown ?
													<ListFieldExpandedDropdown>
														<ListFieldExpandedDropdownOption value=''>Select an option</ListFieldExpandedDropdownOption>
														{
															option.options.map(option => {
																return (
																	<ListFieldExpandedDropdownOption value={option}>{option}</ListFieldExpandedDropdownOption>
																)
															})
														}
													</ListFieldExpandedDropdown>
													:<ListFieldExpandedTextInput suggestions={option.suggestions} />
											}
											{/* <ListFieldExpandedConfirmBtn validate={() => {
												for (let i = 0; i < field.options.length; i++) {
													if (field.options[i].validate() === false) return false
													else continue
													//if validate === false (not undefined or true) then show a banner w/ the names of unfilled ones
												}
												return true
											}} isfilled={activeFieldInputs.filter((input) => input !== undefined).length === field.options.length}/>
											<ListFieldExpandedCancelBtn /> */}
										</ListFieldExpandedOptionWrapper>
									)
								})
							}
						</ListFieldExpandedWrapper>
					</>
					)
				})
			}
			{/* <ListAddBtn /> */}
		</ListWrapper>
	)
}

export default ListElement