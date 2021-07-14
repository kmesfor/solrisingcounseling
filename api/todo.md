POST `/api/login` with token returns true/false

GET `/api/assets?asset=assetFileName` returns asset or no asset

GET `/api/all_assets` returns list of all asset names

POST `/api/assets` with asset data returns confirmed or failed because already exists (create) (can only submit .txt file content and names, not actual files)

PUT `/api/assets` with asset data returns confirmed or failed because does not exist (update)

DELETE `/api/assets` returns confirmed or failed because does not exist (delete)

**Need a way to secure the endpoints** (only modifying the assets, get assetName doesn't need one because all that content is publicly available)

- require a pin (different from password) to save changes for post put or delete assets
- that pin is sent to the auth endpoint but inputted through the site, checked on auth server