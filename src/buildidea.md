Build workflow


Run `solrising build --prod --v 1.0.0` or `solrising build --test --v 1.0.0`
- Creates a build_info.json file with the following info:
{
	"production": boolean,
	"id": "random generated id",
	"date": current date,
	"version": "inputted version",
	"name": if production: "${version}", else: "${version}-test-${id}"
}

Run `solrising test`
- Runs a localhost test with correct config information

Run `solrising deploy [id]`
- Pushes stuff to github for deployment, needs a correct build id, also creates a deployment with the name and correct commit id