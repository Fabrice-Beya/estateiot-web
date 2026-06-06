import React from 'react';
import { Mail, Globe, Shield, Zap, ArrowLeft, Apple, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { site, year } from '../lib/site';

const Support: React.FC = () => {
  return (
    <div className="min-h-screen bg-ink-50/60">
      {/* Header with Navigation */}
      <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/85 backdrop-blur-xl">
        <div className="container-px py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-ink-600 transition-colors hover:text-brand-600">
              <ArrowLeft className="h-4 w-4" />
              Back to EstateIoT
            </Link>
            <div className="flex items-center gap-2.5">
              <img src="/icon.png" alt="EstateIoT" className="h-8 w-8 rounded-[9px] ring-1 ring-ink-100" />
              <span className="font-display text-lg font-bold text-ink-900">
                Estate<span className="text-brand-600">IoT</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-px max-w-4xl py-14">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <span className="eyebrow"><Shield className="h-3.5 w-3.5" /> Support Center</span>
          <h1 className="heading mt-5 text-4xl">How can we help?</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-500">
            Questions about the EstateIoT app or admin portal? Our team is here to help — reach
            out and we'll get back to you within one business day.
          </p>
        </div>

        {/* Quick Help Cards */}
        <div className="mb-12 grid gap-5 md:grid-cols-2">
          <div className="card p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">Email support</h3>
            <p className="mt-2 text-ink-500">For help with your account, the app, or a device issue.</p>
            <a href={`mailto:${site.supportEmail}`} className="mt-4 inline-block font-semibold text-brand-600 hover:underline">
              {site.supportEmail} →
            </a>
          </div>

          <div className="card p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">Business & sales</h3>
            <p className="mt-2 text-ink-500">To roll out EstateIoT across your estate or portfolio.</p>
            <a href={`mailto:${site.salesEmail}`} className="mt-4 inline-block font-semibold text-brand-600 hover:underline">
              {site.salesEmail} →
            </a>
          </div>
        </div>

        {/* Get the app */}
        <div className="mb-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-ink-100 bg-white p-7 shadow-soft sm:flex-row">
          <div>
            <h3 className="font-display text-lg font-semibold text-ink-900">Get the resident app</h3>
            <p className="mt-1 text-ink-500">Available now on iOS and Android.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={site.appStoreUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-950">
              <Apple className="h-4 w-4" /> App Store
            </a>
            <a href={site.playStoreUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-950">
              <Play className="h-4 w-4" /> Google Play
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="card mb-12 p-8">
          <h2 className="heading mb-6 text-2xl">Frequently asked questions</h2>

          <div className="space-y-6">
            <div className="border-b border-ink-100 pb-6">
              <h3 className="font-display text-lg font-semibold text-ink-900">How do I get EstateIoT for my estate?</h3>
              <p className="mt-2 text-ink-500">
                Email our team at {site.salesEmail} and we'll walk you through onboarding your estate,
                configuring gates and devices, and inviting residents to the app.
              </p>
            </div>

            <div className="border-b border-ink-100 pb-6">
              <h3 className="font-display text-lg font-semibold text-ink-900">Is my data secure with EstateIoT?</h3>
              <p className="mt-2 text-ink-500">
                Data is encrypted in transit and you can request that your data be deleted. We only collect
                what's needed to run the service — see our Privacy Policy for full details.
              </p>
            </div>

            <div className="border-b border-ink-100 pb-6">
              <h3 className="font-display text-lg font-semibold text-ink-900">Which devices are supported?</h3>
              <p className="mt-2 text-ink-500">
                The resident app is available on iOS (15.1+) and Android. Administrators manage their
                estates from the web-based admin portal in any modern browser.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-ink-900">How do I report a bug or request a feature?</h3>
              <p className="mt-2 text-ink-500">
                Email {site.supportEmail} with a description and, if possible, a screenshot. We review every
                request and prioritise based on impact.
              </p>
            </div>
          </div>
        </div>

        {/* Features Overview */}
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-8 text-white shadow-lift">
          <h2 className="heading text-2xl text-white">What EstateIoT offers</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="flex items-start gap-3">
              <Shield className="mt-0.5 h-6 w-6 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Smart access control</h3>
                <p className="mt-1 text-sm text-brand-50">Remote gate control, visitor approvals, and single-use access codes.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="mt-0.5 h-6 w-6 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Live monitoring</h3>
                <p className="mt-1 text-sm text-brand-50">Real-time status of gates, cameras, and utilities across the estate.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="mt-0.5 h-6 w-6 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Admin portal</h3>
                <p className="mt-1 text-sm text-brand-50">One console to manage residents, devices, and announcements per estate.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-ink-100 pt-8 text-center">
          <p className="text-ink-500">
            Need a hand? Email us at{' '}
            <a href={`mailto:${site.supportEmail}`} className="font-semibold text-brand-600 hover:underline">
              {site.supportEmail}
            </a>
          </p>
          <p className="mt-2 text-sm text-ink-400">© {year} {site.name}. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
};

export default Support;
