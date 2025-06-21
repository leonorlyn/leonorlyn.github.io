# GitHub Actions Automated Deployment

This workflow will automatically trigger when you push code to the `main` branch, executing the following steps:

## Deployment Process

1. **Checkout Code**: Get the latest code
2. **Setup Environment**: Install Node.js 18
3. **Install Dependencies**: Run `npm ci`
4. **Build Project**: Run `npm run build`
5. **Deploy**: Push the `build` folder to the `gh-pages` branch

## Usage

1. Ensure your GitHub Pages settings point to the `gh-pages` branch
2. Push code to the `main` branch
3. Check the Actions tab to view deployment status
4. The website will update within a few minutes after deployment completes

## Website URL

https://leonorlyn.github.io

## Notes

- Ensure the `homepage` field in `package.json` is set correctly
- The first run may take a few minutes to set up the environment
- If deployment fails, check the Actions logs for detailed error information 