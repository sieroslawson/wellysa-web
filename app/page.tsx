import Hero from '@/components/Hero';
import MainNavigation from '@/components/MainNavigation';
import Assistant from '@/components/Assistant';
import KnowledgeSection from '@/components/KnowledgeSection';
import ResultsSection from '@/components/ResultsSection';
import ProfileSection from '@/components/ProfileSection';
import CollaborationSection from '@/components/CollaborationSection';
import NewsletterPopup from '@/components/NewsletterPopup';
import OnboardingFlow from '@/components/OnboardingFlow';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Above the fold - Hero with Ludzik and integrated navigation */}
      <Hero />
      
      {/* Assistant Chatbot */}
      <Assistant />
      
      {/* Main Sections */}
      <KnowledgeSection />
      <ResultsSection />
      <ProfileSection />
      <CollaborationSection />
      
      {/* Newsletter Popup (appears after 30s) */}
      <NewsletterPopup />
      
      {/* Onboarding Flow */}
      <OnboardingFlow />
    </main>
  );
}
