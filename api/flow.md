1. From home page, user clicks `Admin` or `Sign In` button
2. User enters admin `username` and admin `password`
3. User clicks sign in
4. `POST /api/login` returns true/false for authenticated and redirects to the admin panel

5. Admin panel has 4 sections that are all displayed simultaneously:
	- Enable/disable maintenance mode
	- Edit sidebar entires
	- Edit site sections
	- Edit other configuration

	* Maintenance mode -> `toggle switch`
	* Sidebar entries -> `scrollable list of titles, an add button at the top, delete and edit button for each entry, also a change order function, either drag and drop or move up and down with buttons`
	* Site sections -> `similar functionality as sidebar entries but for site sections`
	* Other configuration -> `similar functionality as sidebar entries, but, cannot be deleted`