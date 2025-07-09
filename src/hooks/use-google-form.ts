"use client"

import { useState, useCallback } from "react"
import { type GoogleFormConfig, validateGoogleFormConfig, SubmissionRateLimit } from "@/lib/google-forms-setup"

interface UseGoogleFormOptions {
  config: GoogleFormConfig
  onSuccess?: () => void
  onError?: (error: string) => void
  enableRateLimit?: boolean
}

interface UseGoogleFormReturn {
  submit: (data: Record<string, string>) => Promise<void>
  isSubmitting: boolean
  error: string | null
  clearError: () => void
}

const rateLimiter = new SubmissionRateLimit()

export const useGoogleForm = ({
  config,
  onSuccess,
  onError,
  enableRateLimit = true,
}: UseGoogleFormOptions): UseGoogleFormReturn => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  const submit = useCallback(
    async (data: Record<string, string>) => {
      // Validate configuration
      if (!validateGoogleFormConfig(config)) {
        const errorMsg = "Invalid Google Form configuration"
        setError(errorMsg)
        onError?.(errorMsg)
        return
      }

      // Check rate limiting
      if (enableRateLimit && !rateLimiter.canSubmit()) {
        const errorMsg = "Too many submissions. Please wait before trying again."
        setError(errorMsg)
        onError?.(errorMsg)
        return
      }

      setIsSubmitting(true)
      setError(null)

      try {
        const formData = new FormData()

        // Map data to Google Form entry IDs
        Object.entries(data).forEach(([key, value]) => {
          const entryId = config.fieldMappings[key]
          if (entryId && value) {
            formData.append(entryId, value)
          }
        })

        // Submit to Google Forms
        const response = await fetch(config.formUrl, {
          method: "POST",
          mode: "no-cors",
          body: formData,
        })

        // With no-cors, we can't read the response
        // Assume success if no error is thrown
        onSuccess?.()
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Failed to submit form"
        setError(errorMessage)
        onError?.(errorMessage)
        throw err
      } finally {
        setIsSubmitting(false)
      }
    },
    [config, onSuccess, onError, enableRateLimit],
  )

  return {
    submit,
    isSubmitting,
    error,
    clearError,
  }
}
