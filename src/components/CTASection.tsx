"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Alert, AlertDescription } from "@/components/ui/alert"
import SectionHeader from "./section-header"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useState } from "react"
import { Loader, AlertCircle, CheckCircle } from "lucide-react"

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must be less than 50 characters"),
  companyName: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
  companyStage: z.string().min(1, "Please select your company stage"),
  helpTopic: z.string().min(1, "Please select a topic"),
})

type FormData = z.infer<typeof formSchema>

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

const CTASection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      companyStage: "",
      helpTopic: "",
    },
  })

  const submitToGoogleForm = async (data: FormData): Promise<void> => {

    const formData = new FormData()

    // Map form fields to Google Form entry IDs
    formData.append(GOOGLE_FORM_CONFIG.fieldMappings.fullName, data.fullName)
    formData.append(GOOGLE_FORM_CONFIG.fieldMappings.companyName, data.companyName)
    formData.append(GOOGLE_FORM_CONFIG.fieldMappings.email, data.email)
    formData.append(GOOGLE_FORM_CONFIG.fieldMappings.companyStage, data.companyStage)
    formData.append(GOOGLE_FORM_CONFIG.fieldMappings.helpTopic, data.helpTopic)

    try {
      const response = await fetch(GOOGLE_FORM_CONFIG.formUrl, {
        method: "POST",
        mode: "no-cors", // Required for Google Forms
        body: formData,
      })

      // Note: With no-cors mode, we can't read the response
      // Google Forms will always appear to succeed from our perspective
      // We assume success if no error is thrown
    } catch (error) {
      console.error("Google Form submission error:", error)
      throw new Error("Failed to submit form. Please try again.")
    }
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      await submitToGoogleForm(data)
      setIsSubmitted(true)
      form.reset()
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred"
      setSubmitError(errorMessage)
      console.error("Submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="bg-background">
        <SectionHeader
          title="Welcome to the Future of Startup Law!"
          subtitle="Thank you for joining our waitlist"
          position="center"
          className="border-b"
        />
        <div className="container mx-auto py-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="border rounded-lg p-8 bg-card">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">You're on the list!</h3>
              <p className="text-muted-foreground mb-4">
                We'll notify you as soon as we launch. Get ready to save thousands on legal fees!
              </p>
              <Button onClick={() => setIsSubmitted(false)} variant="outline">
                Submit Another Response
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-background">
      <SectionHeader
        title="500+ startups trusted us pre-launch – claim your spot!"
        subtitle="Join the Future of Startup Law"
        subtext="Get 30% Off Now"
        position="center"
        className="border-b"
      />

      <div className="container mx-auto py-12">
        <div className="max-w-2xl mx-auto">
          {submitError && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{submitError}</AlertDescription>
            </Alert>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your full name"
                          className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your company name"
                          className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="companyStage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Stage</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-muted border-border text-foreground">
                          <SelectValue placeholder="Select your funding stage" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-popover border-border">
                        <SelectItem value="pre-seed">Pre-seed</SelectItem>
                        <SelectItem value="seed">Seed</SelectItem>
                        <SelectItem value="series-a">Series A</SelectItem>
                        <SelectItem value="series-b">Series B+</SelectItem>
                        <SelectItem value="bootstrapped">Bootstrapped</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="helpTopic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What do you need help with?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-muted border-border text-foreground">
                          <SelectValue placeholder="I need help with..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-popover border-border">
                        <SelectItem value="contracts">Contracts</SelectItem>
                        <SelectItem value="safe-notes">SAFE Notes</SelectItem>
                        <SelectItem value="compliance">Compliance</SelectItem>
                        <SelectItem value="incorporation">Incorporation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-medium"
                disabled={isSubmitting}
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

              <p className="text-xs text-muted-foreground text-center">
                By joining our waitlist, you agree to receive updates about Aittorney. We respect your privacy and won't
                spam you.
              </p>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default CTASection
