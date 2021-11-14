import React, {useState} from 'react'
import { ListWrapper, ListTitle, ListFieldWrapper, ListFieldText, ListFieldEditBtn, ListFieldDeleteBtn, ListFieldReorderBtn, ListDragContainer, ListFieldExpandedWrapper, ListFieldExpandedCloseBtn, ListFieldExpandedOptionWrapper, ListFieldExpandedTitle, ListFieldExpandedDropdown, ListFieldExpandedDropdownOption, ListFieldExpandedTextInput, ListFieldExpandedFileSelect, ListTopBarWrapper } from './ListElements'
//TODO: add new boolean type
const ListElement = ({title, fields, canCreateFields, canDeleteFields, onupdate }) => {

	//TODO: implement canCreateFields and canDeleteFields
	//handle when validate returns false

	const [fieldList, setFieldList] = useState(fields || [])

	const [activeField, setActiveField] = useState(undefined)

	const [draggedItem, setDraggedItem] = useState(undefined)

	const [isAvailable, setIsAvailable] = useState(false)

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

	const onInputUpdate = (event, activeField, option) => {
		fieldList[activeField].options[fields[activeField].options.indexOf(option)].value = event.target.value
		onupdate(fieldList)
		console.log(checkIsAvailable())
	}

	const checkIsAvailable = () => {
		if (activeField === undefined) return setIsAvailable(false)
		for (let i = 0; i < fields[activeField].options.length; i++) {
			let val = fields[activeField].options[i].value
			if (val === null || val === '' || val === ' ') {
				return setIsAvailable(false)
			} else if (fields[activeField].options[i].validate && fields[activeField].options[i].validate(fields[activeField].options[i].value) === false) {
				return setIsAvailable(false)
			}
		}
		return setIsAvailable(true)
	}

	return (
		<ListWrapper>
			<ListTopBarWrapper>
				<ListTitle>{title}</ListTitle>
			</ListTopBarWrapper>
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
							{/* <ListFieldExpandedConfirmBtn isopen={activeField === index} isavailable={isAvailable}>


									todo: get rid of save button from individual portions make it main instead,
									portions autosave just check if the entire has changed from before then save/unsave
								
								<ListFieldExpandedConfirmBtnIcon />
							</ListFieldExpandedConfirmBtn> */}
											{/* <ListFieldExpandedCancelBtn /> */}
											{/* /*validate={() => {
												for (let i = 0; i < field.options.length; i++) {
													if (field.options[i].validate() === false) return false
													else continue
													//if validate === false (not undefined or true) then show a banner w/ the names of unfilled ones
												}
												return true
											}} isfilled={fieldList[activeField].map((input) => input.value !== null).length === field.options.length} */}
							{
								field.options.map(option => {
									return (
										<ListFieldExpandedOptionWrapper>
											<ListFieldExpandedTitle>{option.name}</ListFieldExpandedTitle>
											{
												option.type === 'dropdown' ?
													<ListFieldExpandedDropdown onInput={(e) => onInputUpdate(e, activeField, option)}>
														<ListFieldExpandedDropdownOption value='' >Select an option</ListFieldExpandedDropdownOption>
														{
															option.options.map(option => {
																return (
																	<ListFieldExpandedDropdownOption value={option}>{option}</ListFieldExpandedDropdownOption>
																)
															})
														}
													</ListFieldExpandedDropdown>
												: option.type === 'text' ? 
													<ListFieldExpandedTextInput onInput={(e) => onInputUpdate(e, activeField, option)}/>
												: option.type === 'fileselect' ? 
													<ListFieldExpandedFileSelect type='file' accept={option.acceptedFileType} onInput={(e) => onInputUpdate(e, activeField, option)} />
												:
													<h1>Error: Invalid input component</h1>
											}
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