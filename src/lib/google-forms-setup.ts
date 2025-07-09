/**
 * Google Forms Integration Setup Guide
 *
 * Follow these steps to configure your Google Form:
 *
 * 1. Create a Google Form:
 *    - Go to https://forms.google.com
 *    - Create a new form with fields matching your React form
 *    - Make sure field types match (text, email, multiple choice, etc.)
 *
 * 2. Get the Form URL:
 *    - Click "Send" button in your Google Form
 *    - Copy the form URL
 *    - Replace "/viewform" with "/formResponse" at the end
 *
 * 3. Find Field Entry IDs:
 *    - Open your Google Form
 *    - Right-click and "View Page Source"
 *    - Search for "entry." followed by numbers
 *    - Each form field has a unique entry ID like "entry.123456789"
 *    - Map these to your form fields in the GOOGLE_FORM_CONFIG
 *
 * 4. Alternative method to find entry IDs:
 *    - Fill out your Google Form
 *    - Before submitting, open browser dev tools (F12)
 *    - Go to Network tab
 *    - Submit the form
 *    - Look at the form submission request to see the entry IDs
 *
 * 5. Update the configuration:
 *    - Replace the formUrl in GOOGLE_FORM_CONFIG
 *    - Replace all entry IDs with your actual ones
 *
 * Security Notes:
 * - Google Forms submissions use 'no-cors' mode
 * - This prevents reading the response but allows submission
 * - Consider implementing your own backend for better error handling
 * - Always validate data on both client and server side
 */

export interface GoogleFormConfig {
  formUrl: string
  fieldMappings: Record<string, string>
}

export const validateGoogleFormConfig = (config: GoogleFormConfig): boolean => {
  if (!config.formUrl || !config.formUrl.includes("formResponse")) {
    console.error("Invalid Google Form URL. Make sure it ends with /formResponse")
    return false
  }

  if (!config.fieldMappings || Object.keys(config.fieldMappings).length === 0) {
    console.error("No field mappings provided")
    return false
  }

  return true
}

// Rate limiting helper to prevent spam
export class SubmissionRateLimit {
  private submissions: number[] = []
  private readonly maxSubmissions: number
  private readonly timeWindow: number

  constructor(maxSubmissions = 5, timeWindowMs = 60000) {
    this.maxSubmissions = maxSubmissions
    this.timeWindow = timeWindowMs
  }

  canSubmit(): boolean {
    const now = Date.now()
    this.submissions = this.submissions.filter((time) => now - time < this.timeWindow)

    if (this.submissions.length >= this.maxSubmissions) {
      return false
    }

    this.submissions.push(now)
    return true
  }
}
