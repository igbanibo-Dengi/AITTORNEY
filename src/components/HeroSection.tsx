"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useState } from "react"
import { Loader, AlertCircle, CheckCircle } from "lucide-react"

interface FormData {
  fullName: string
  companyName: string
  email: string
  companyStage: string
  helpTopic: string
}

const HeroSection = () => {
  const [email, setEmail] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    companyStage: "",
    needHelp: "",
  })

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

  const handleGetStarted = () => {
    if (email) {
      setIsDialogOpen(true)
    }
  }

  const submitToGoogleForm = async (data: FormData): Promise<void> => {
    const googleFormData = new FormData()

    // Map form fields to Google Form entry IDs
    googleFormData.append(GOOGLE_FORM_CONFIG.fieldMappings.fullName, data.fullName)
    googleFormData.append(GOOGLE_FORM_CONFIG.fieldMappings.companyName, data.companyName)
    googleFormData.append(GOOGLE_FORM_CONFIG.fieldMappings.email, data.email)
    googleFormData.append(GOOGLE_FORM_CONFIG.fieldMappings.companyStage, data.companyStage)
    googleFormData.append(GOOGLE_FORM_CONFIG.fieldMappings.helpTopic, data.helpTopic)

    try {
      const response = await fetch(GOOGLE_FORM_CONFIG.formUrl, {
        method: "POST",
        mode: "no-cors", // Required for Google Forms
        body: googleFormData,
      })
      // Note: With no-cors mode, we can't read the response
      // Google Forms will always appear to succeed from our perspective
      // We assume success if no error is thrown
    } catch (error) {
      console.error("Google Form submission error:", error)
      throw new Error("Failed to submit form. Please try again.")
    }
  }

  const validateForm = (): string | null => {
    if (!formData.firstName.trim()) {
      return "Full name is required"
    }
    if (!formData.companyName.trim()) {
      return "Company name is required"
    }
    if (!email.trim()) {
      return "Email is required"
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Please enter a valid email address"
    }
    if (!formData.companyStage) {
      return "Please select your company stage"
    }
    if (!formData.needHelp) {
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
        fullName: formData.firstName,
        companyName: formData.companyName,
        email: email,
        companyStage: formData.companyStage,
        helpTopic: formData.needHelp,
      }

      await submitToGoogleForm(submissionData)
      setIsSubmitted(true)

      // Reset form
      setFormData({
        firstName: "",
        companyName: "",
        companyStage: "",
        needHelp: "",
      })
      setEmail("")
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred"
      setSubmitError(errorMessage)
      console.error("Submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetDialog = () => {
    setIsSubmitted(false)
    setSubmitError(null)
    setIsDialogOpen(false)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center border-b">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        {/* <img src="/placeholder.svg?height=1080&width=1920" alt="Background" className="w-full h-full object-cover" /> */}
        <img
          src="/lovable-uploads/BG.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-6 text-center py-32">
        <h1 className="text-4xl md:text-5xl lg:text-5xl text-foreground mb-6 leading-tight max-w-4xl mx-auto mt-16">
          Legal Docs for Startups & SMEs,
          <br />
          <span className="">Drafted by AI in Minutes</span>
        </h1>
        <p className="pb-4">Join us on this visionary expedition into the heart of AI.</p>
        <p className="text-lg md:text-xl font-semibold mb-12 max-w-3xl mx-auto">
          Get startup-friendly contracts, SAFE notes, and compliance docs—AI-generated,
          <br />
          lawyer-reviewed, at 80% lower cost.
        </p>

        {/* Email signup form */}
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto mb-6">
          <Input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 h-12 bg-background/50 border-border text-foreground placeholder:text-muted-foreground backdrop-blur-sm"
          />
          <Button
            onClick={handleGetStarted}
            disabled={!email.trim()}
            className="h-12 bg-primary hover:bg-primary/90 text-primary-foreground px-8 whitespace-nowrap font-medium disabled:opacity-50"
          >
            Join Waitlist
          </Button>
          <p className="text-xs text-muted-foreground absolute -bottom-5 left-0">First 50 Get Free Doc Review</p>
        </div>
      </div>

      {/* Signup Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
              <Button onClick={resetDialog} variant="outline">
                Submit Another Response
              </Button>
            </div>
          ) : (
            // Form State
            <>
              <DialogHeader className="text-center space-y-3 bg-[#1A1A1A] p-6">
                <div className="text-white text-[11px] p-2 bg-[#333333] rounded-md w-fit mx-auto font-medium tracking-wide capitalize">
                  Join the Future of StartUp Law
                </div>
                <DialogTitle className="text-2xl text-center font-bold text-white">
                  500+ startups trusted us pre-launch – claim your spot!
                </DialogTitle>
                <div className="text-primary text-center text-3xl font-semibold">Get 30% Off Now</div>
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
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={formData.needHelp}
                    onValueChange={(value) => setFormData({ ...formData, needHelp: value })}
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
                  By joining our waitlist, you agree to receive updates about Aittorney. We respect your privacy and
                  won't spam you.
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default HeroSection
