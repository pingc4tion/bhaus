"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [userType, setUserType] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email, userType })
  }

  return (
    <section className="flex flex-col items-center justify-center px-6 pt-12 pb-24 md:pt-16 md:pb-32">
      <div className="text-center max-w-lg mx-auto mb-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight mb-3 text-balance">
          Find Your Long-Term Student Home Faster
        </h1>
        <p className="text-muted-foreground text-xs md:text-sm max-w-sm mx-auto leading-relaxed">
          Join and get access to verified long-term student rentals, smart search tools, and updates that help you
          secure a place with confidence — without the stress.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-3">
        <div className="bg-background rounded-2xl p-5 shadow-lg border border-border">
          <div className="space-y-3">
            <Input
              type="email"
              placeholder="Enter your student email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 w-full rounded-lg border-border bg-background text-sm"
              required
            />

            <Select value={userType} onValueChange={setUserType}>
              <SelectTrigger className="!h-11 !w-full rounded-lg border-border bg-background text-sm px-3 py-1" size="default">
                <SelectValue placeholder="I'm a" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="landlord">Landlord</SelectItem>
                <SelectItem value="parent">Parent</SelectItem>
              </SelectContent>
            </Select>

            <Button type="submit" className="w-full h-11 rounded-lg text-sm font-medium">
              Join Waitlist
            </Button>

            <p className="text-center text-xs text-muted-foreground pt-1">
              We promise to protect your information and keep it confidential.
            </p>
          </div>
        </div>
      </form>
    </section>
  )
}
