# Playwright Skill

## Description
Comprehensive Playwright integration for web testing, automation, and browser control. This skill provides advanced capabilities for web development workflows including installation, setup, browser automation, screenshot/video capture, and integration with OpenClaw's existing browser tools.

## When to Use
Use this skill when you need to:
- Perform automated web testing and validation
- Capture screenshots or videos of web pages
- Automate browser interactions and workflows  
- Test web application functionality across browsers
- Create visual regression tests
- Extract data from web pages through automation
- Debug web applications with automated workflows

## Installation & Setup

### Prerequisites
- Node.js 16+ (already available in OpenClaw environment)
- Playwright CLI (already installed: v1.58.2)

### Verification
```bash
npx playwright --version
# Should return: Version 1.58.2
```

### Browser Installation
Playwright automatically manages browser installations. To ensure all browsers are available:
```bash
npx playwright install
```

## Core Capabilities

### 1. Browser Automation
- Launch and control Chromium, Firefox, and WebKit browsers
- Navigate to URLs and handle page loads
- Interact with page elements (click, type, hover, etc.)
- Handle dialogs, popups, and authentication
- Manage cookies, localStorage, and session data

### 2. Screenshot & Video Capture
- Full page screenshots
- Element-specific screenshots  
- Viewport-based screenshots
- Automated video recording of test runs
- Multiple format support (PNG, JPEG, WebM)

### 3. Web Testing Workflows
- End-to-end testing scenarios
- Form validation and submission
- Navigation and routing tests
- API mocking and interception
- Performance timing and metrics
- Cross-browser compatibility testing

### 4. Integration with OpenClaw
- Works alongside OpenClaw's built-in `browser` tool
- Can be used in sub-agent workflows for complex testing
- Integrates with existing screenshot and automation capabilities
- Supports both headless and headed browser modes

## Usage Examples

### Basic Page Screenshot
```javascript
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({ path: 'example.png' });
  await browser.close();
})();
```

### Form Testing
```javascript
// Fill form and submit
await page.fill('#email', 'test@example.com');
await page.fill('#password', 'password123');
await page.click('#submit-button');
await page.waitForSelector('#success-message');
```

### Cross-Browser Testing
```javascript
// Test across multiple browsers
const browsers = ['chromium', 'firefox', 'webkit'];
for (const browserType of browsers) {
  const browser = await playwright[browserType].launch();
  // ... test logic
}
```

## Best Practices

### Performance Optimization
- Use headless mode for faster execution
- Reuse browser instances when possible
- Implement proper cleanup and resource management
- Use appropriate timeouts and wait strategies

### Reliability
- Use explicit waits instead of implicit sleeps
- Handle async operations properly with await
- Implement retry logic for flaky tests
- Use stable selectors (data-testid, etc.)

### Security
- Never store credentials in test code
- Use environment variables for sensitive data
- Clean up test data after execution
- Run tests in isolated environments

## Integration with Other Skills

### frontend-philosophy
- Use Playwright to validate UI implementation against design principles
- Test responsive design across viewports
- Verify accessibility compliance

### skill-creator  
- Use Playwright to test newly created skills that involve web interfaces
- Validate skill documentation examples

### video-frames
- Combine Playwright video capture with ffmpeg processing
- Extract specific frames from recorded test sessions

## Troubleshooting

### Common Issues
- **Browser not launching**: Ensure proper permissions and dependencies
- **Element not found**: Use stable selectors and proper wait strategies  
- **Timeout errors**: Adjust timeout settings and implement proper waits
- **Memory leaks**: Ensure proper browser/page cleanup

### Debugging Tips
- Use headed mode for visual debugging
- Enable verbose logging with `DEBUG=pw:api`
- Take screenshots on failure for visual debugging
- Use Playwright's Inspector tool for step-by-step debugging

## Maintenance

### Updates
- Regularly update Playwright to latest version
- Test compatibility with browser updates
- Monitor for breaking changes in major versions

### Dependencies
- Keep Node.js version compatible
- Monitor system dependencies (libX11, libXss, etc.)
- Ensure sufficient disk space for browser installations

---
*This skill integrates with OpenClaw's existing browser automation capabilities and provides advanced Playwright-specific functionality for comprehensive web testing and automation workflows.*