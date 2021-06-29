POST `/api/login` with token returns true/false

GET `/api/assets/assetName` returns asset or no asset

POST `/api/assets/assetName` with asset data returns confirmed or failed because already exists

PUT `/api/assets/assetName` with asset data returns confirmed or failed because does not exist

DELETE `/api/assets/assetName` returns confirmed or failed because does not exist

**Need a way to secure the endpoints**

- require a pin (different from password) to save changes for post put or delete assets
- that pin is sent to the auth endpoint but inputted through the site, checked on auth server