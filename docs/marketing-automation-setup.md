# Marketing Automation Setup Guide for Taalib

## Overview
This guide documents the current status of all marketing automation skills and what's needed for Taalib's rental property marketing use case.

---

## 1. 📧 Himalaya (Email Automation) - ✅ READY

**Status:** Installed and configured

**Version:** v1.2.0

**Configuration:**
- Email: mozark095@gmail.com
- IMAP: imap.gmail.com:993
- SMTP: smtp.gmail.com:465

**Test Result:** ✅ Working - successfully listed 10 recent emails

**Capabilities for Rental Marketing:**
- Send property listings to leads
- Automated follow-up emails
- Inquiry response automation
- Property viewing confirmations

**⚠️ Security Note:** The SMTP password is stored in plain text in `~/.config/himalaya/config.toml`. Consider using `secret-tool` (keyring) for better security.

---

## 2. 📱 WhatsApp CLI (wacli) - ⚠️ NEEDS AUTH

**Status:** Installed (v0.2.0) but NOT authenticated

**Authentication Required:**
```bash
wacli auth
```
This will show a QR code to scan with WhatsApp.

**After Auth - Quick Commands:**
```bash
wacli sync --follow          # Continuous sync
wacli chats list             # List conversations
wacli send text --to "+1234567890" --message "Property available!"
```

**Capabilities for Rental Marketing:**
- Send property updates to leads via WhatsApp
- Quick inquiry responses
- Viewing appointment reminders
- Group broadcasts to tenant lists

---

## 3. 🐦 X/Twitter API (xurl) - ⚠️ NEEDS SETUP

**Status:** Installed but NOT configured

**Setup Required (Must be done manually outside agent):**

1. **Create X Developer Account:**
   - Go to https://developer.x.com
   - Apply for a developer account

2. **Create an App:**
   - Create a new project/app in the developer portal
   - Get API Key and API Secret

3. **Register Credentials (run manually):**
   ```bash
   xurl auth apps add
   # Follow prompts to enter credentials
   ```

4. **Authenticate:**
   ```bash
   xurl auth oauth2
   ```

**Quick Commands (once authenticated):**
```bash
xurl post "New property available in Colombo!"
xurl search "rental Colombo" -n 10
xurl follow @property_lovers
```

**Capabilities for Rental Marketing:**
- Post property listings
- Engage with rental-related hashtags
- Property market updates
- Lead generation via social listening

---

## 4. 📝 Notion API - ❌ NOT CONFIGURED

**Status:** Not set up yet

**Setup Required:**

1. **Create Integration:**
   - Go to https://notion.so/my-integrations
   - Create a new integration
   - Copy the API key (starts with `secret_`)

2. **Configure:**
   ```bash
   mkdir -p ~/.config/notion
   echo "secret_your_key_here" > ~/.config/notion/api_key
   ```

3. **Connect Pages:**
   - Open your Notion pages
   - Click "..." → "Connect to" → select your integration

**Example Commands:**
```bash
NOTION_KEY=$(cat ~/.config/notion/api_key)
# Search pages
curl -X POST "https://api.notion.com/v1/search" \
  -H "Authorization: Bearer $NOTION_KEY" \
  -H "Notion-Version: 2025-09-03" \
  -H "Content-Type: application/json" \
  -d '{"query": "properties"}'
```

**Capabilities for Rental Marketing:**
- Property database management
- Lead tracking database
- Task/follow-up automation
- Property listing inventory

---

## 5. 📰 Blog Watcher - ⚠️ NEEDS BLOGS

**Status:** Installed but no blogs tracked

**Setup Example:**
```bash
# Add rental property blogs to monitor
blogwatcher add " Lanka Property" https://www.lankaproperty.com
blogwatcher add "Colombo Real Estate" https://www.colomborealestate.com

# Check for updates
blogwatcher scan
blogwatcher articles
```

**Capabilities for Rental Marketing:**
- Monitor competitor listings
- Market trend analysis
- Industry news aggregation
- Price tracking

---

## Recommended Setup Priority

| Priority | Tool | Effort | Use Case |
|----------|------|--------|----------|
| 1 | Himalaya | Done ✅ | Email leads, inquiries |
| 2 | Notion | 15 min | Property/lead database |
| 3 | wacli | 5 min | WhatsApp follow-ups |
| 4 | Blogwatcher | 10 min | Market intelligence |
| 5 | xurl | 30 min | Social media presence |

---

## Rental Property Marketing Workflow

**Lead Capture → Nurture → Convert:**

1. **Lead comes via website/form**
   - Notion: Create lead record
   - Himalaya: Send welcome email + property options

2. **Follow-up sequence**
   - wacli: WhatsApp check-in
   - Notion: Update lead status

3. **Property updates**
   - xurl: Post new listings
   - wacli: Notify interested parties
   - Himalaya: Detailed property emails

4. **Market intelligence**
   - Blogwatcher: Monitor competitors
   - Notion: Track market prices
