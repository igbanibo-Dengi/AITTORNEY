"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useState, type ReactNode } from "react"
import { Loader, AlertCircle, CheckCircle } from "lucide-react"

interface FormData {
  fullName: string
  companyName: string
  email: string
  companyStage: string
  helpTopic: string
}

interface WaitlistModalProps {
  // Trigger button props
  triggerText?: string
  triggerVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  triggerSize?: "default" | "sm" | "lg" | "icon"
  triggerClassName?: string
  triggerDisabled?: boolean

  // Modal content props
  title?: string
  subtitle?: string
  description?: string

  // Form props
  initialEmail?: string
  onSuccess?: (data: FormData) => void
  onError?: (error: string) => void

  // Custom trigger (if you want something other than a button)
  customTrigger?: ReactNode

  // Modal state control (for external control)
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

// Configuration for Google Forms integration
const GOOGLE_FORM_CONFIG = {
  formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfdBJWdigCpb1qEw1YXxSCdOxrdiNh-FIwBQASZ1GYID_JFwQ/formResponse",
  fieldMappings: {
    fullName: "entry.416643927",
    companyName: "entry.1432374726",
    email: "entry.1616552788",
    companyStage: "entry.1552882587",
    helpTopic: "entry.381677331",
  },
}

const WaitlistModal = ({
  triggerText = "Join Waitlist",
  triggerVariant = "default",
  triggerSize = "default",
  triggerClassName = "",
  triggerDisabled = false,
  title = "500+ startups trusted us pre-launch – claim your spot!",
  subtitle = "Join the Future of StartUp Law",
  description = "Get 30% Off Now",
  initialEmail = "",
  onSuccess,
  onError,
  customTrigger,
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
}: WaitlistModalProps) => {
  const [internalOpen, setInternalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: initialEmail,
    companyStage: "",
    helpTopic: "",
  })

  // Use controlled state if provided, otherwise use internal state
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen
  const setIsOpen = controlledOnOpenChange || setInternalOpen

  const submitToGoogleForm = async (data: FormData): Promise<void> => {
    const googleFormData = new FormData()

    // Map form fields to Google Form entry IDs
    googleFormData.append(GOOGLE_FORM_CONFIG.fieldMappings.fullName, data.fullName)
    googleFormData.append(GOOGLE_FORM_CONFIG.fieldMappings.companyName, data.companyName)
    googleFormData.append(GOOGLE_FORM_CONFIG.fieldMappings.email, data.email)
    googleFormData.append(GOOGLE_FORM_CONFIG.fieldMappings.companyStage, data.companyStage)
    googleFormData.append(GOOGLE_FORM_CONFIG.fieldMappings.helpTopic, data.helpTopic)

    try {
      await fetch(GOOGLE_FORM_CONFIG.formUrl, {
        method: "POST",
        mode: "no-cors", // Required for Google Forms
        body: googleFormData,
      })
    } catch (error) {
      console.error("Google Form submission error:", error)
      throw new Error("Failed to submit form. Please try again.")
    }
  }

  const validateForm = (): string | null => {
    if (!formData.fullName.trim()) {
      return "Full name is required"
    }
    if (!formData.companyName.trim()) {
      return "Company name is required"
    }
    if (!formData.email.trim()) {
      return "Email is required"
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return "Please enter a valid email address"
    }
    if (!formData.companyStage) {
      return "Please select your company stage"
    }
    if (!formData.helpTopic) {
      return "Please select what you need help with"
    }
    return null
  }

  const handleSubmit = async () => {
    const validationError = validateForm()
    if (validationError) {
      setSubmitError(validationError)
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const submissionData: FormData = {
        fullName: formData.fullName,
        companyName: formData.companyName,
        email: formData.email,
        companyStage: formData.companyStage,
        helpTopic: formData.helpTopic,
      }

      await submitToGoogleForm(submissionData)
      setIsSubmitted(true)

      // Call success callback if provided
      onSuccess?.(submissionData)

      // Reset form
      setFormData({
        fullName: "",
        companyName: "",
        email: initialEmail,
        companyStage: "",
        helpTopic: "",
      })
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred"
      setSubmitError(errorMessage)
      onError?.(errorMessage)
      console.error("Submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetModal = () => {
    setIsSubmitted(false)
    setSubmitError(null)
    setFormData({
      fullName: "",
      companyName: "",
      email: initialEmail,
      companyStage: "",
      helpTopic: "",
    })
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) {
      // Reset modal when closing
      setTimeout(() => {
        resetModal()
      }, 300) // Delay to allow modal close animation
    }
  }

  const triggerButton = customTrigger || (
    <Button variant={triggerVariant} size={triggerSize} className={triggerClassName} disabled={triggerDisabled}>
      {triggerText}
    </Button>
  )

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>

      <DialogContent className="sm:max-w-4xl bg-card border-border p-0 overflow-y-auto max-h-[90vh]">
        {isSubmitted ? (
          // Success State
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">You're on the list!</h3>
            <p className="text-muted-foreground mb-6">
              We'll notify you as soon as we launch. Get ready to save thousands on legal fees!
            </p>
            <div className="flex gap-3 justify-center">
              <Button onClick={resetModal} variant="outline">
                Submit Another Response
              </Button>
              <Button onClick={() => setIsOpen(false)}>Close</Button>
            </div>
          </div>
        ) : (
          // Form State
          <>
            <DialogHeader className="text-center space-y-3 bg-[#1A1A1A] p-6">
              <div className="text-white text-[11px] p-2 bg-[#333333] rounded-md w-fit mx-auto font-medium tracking-wide capitalize">
                {subtitle}
              </div>
              <DialogTitle className="text-2xl text-center font-bold text-white">{title}</DialogTitle>
              <div className="text-primary text-center text-3xl font-semibold">{description}</div>
            </DialogHeader>

            <div className="space-y-4 mt-6 pb-6 max-w-2xl mx-auto w-full px-6">
              {submitError && (
                <Alert variant="destructive" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{submitError}</AlertDescription>
                </Alert>
              )}

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Name*</label>
                  <Input
                    placeholder="Full Legal Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="bg-muted border-border text-foreground h-10"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Company Name*</label>
                  <Input
                    placeholder="Company Legal Name"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="bg-muted border-border text-foreground h-10"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Email*</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-muted border-border text-foreground h-10"
                />
              </div>

              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Company Stage*</label>
                <Select
                  value={formData.companyStage}
                  onValueChange={(value) => setFormData({ ...formData, companyStage: value })}
                >
                  <SelectTrigger className="bg-muted border-border text-foreground h-10">
                    <SelectValue placeholder="Pre-Seed/Series-Seed (Raise-5)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pre-seed">Pre-Seed</SelectItem>
                    <SelectItem value="seed">Seed</SelectItem>
                    <SelectItem value="series-a">Series A</SelectItem>
                    <SelectItem value="series-b">Series B</SelectItem>
                    <SelectItem value="later-stage">Later Stage</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-xs text-muted-foreground mb-1 block">What do you need help with?*</label>
                <Select
                  value={formData.helpTopic}
                  onValueChange={(value) => setFormData({ ...formData, helpTopic: value })}
                >
                  <SelectTrigger className="bg-muted border-border text-foreground h-10">
                    <SelectValue placeholder="I need help with..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="contracts">Contracts</SelectItem>
                    <SelectItem value="safe-notes">SAFE Notes</SelectItem>
                    <SelectItem value="compliance">Compliance</SelectItem>
                    <SelectItem value="incorporation">Incorporation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 font-medium mt-6"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                    Joining Waitlist...
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                By joining our waitlist, you agree to receive updates about Aittorney. We respect your privacy and won't
                spam you.
              </p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default WaitlistModal

// // Basic usage with custom text
// <WaitlistModal triggerText="Get Started" />

// // With custom styling and callbacks
// <WaitlistModal
//   triggerText="Join Beta"
//   triggerVariant="outline"
//   triggerSize="lg"
//   onSuccess={(data) => console.log("Success!", data)}
//   onError={(error) => console.log("Error:", error)}
// />

// // With custom trigger element
// <WaitlistModal
//   customTrigger={
//     <div className="custom-trigger">
//       Click me!
//     </div>
//   }
// />

// // With controlled state (external control)
// <WaitlistModal
//   open={isModalOpen}
//   onOpenChange={setIsModalOpen}
//   triggerText="Controlled Modal"
// />