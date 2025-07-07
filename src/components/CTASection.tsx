"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import SectionHeader from "./section-header"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useState } from "react"

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
  companyStage: z
    .string()
    .min(2, "Please describe your company stage")
    .max(100, "Company stage description is too long"),
  helpTopic: z.string().min(1, "Please select a topic"),
})


type FormData = z.infer<typeof formSchema>

const CTASection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Form submitted:", data)
      setIsSubmitted(true)
      form.reset()
    } catch (error) {
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
          <div className="max-w-2xl mx-auto text-center bg-[#1A1A1A]">
            <div className="border rounded-lg p-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold  mb-2">You're on the list!</h3>
              <p className=" mb-4">
                We'll notify you as soon as we launch. Get ready to save thousands on legal fees!
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
              >
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
                    <FormLabel>What do need help with?</FormLabel>
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
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
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
