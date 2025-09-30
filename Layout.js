
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Newspaper, 
  PenTool, 
  BookOpen, 
  Smile, 
  Image as ImageIcon,
  PuzzleIcon,
  MessageSquare,
  Plus,
  Heart,
  Info,
  Settings
} from "lucide-react";

const sections = [
  { name: "Essays", path: "Essays", icon: PenTool },
  { name: "Research", path: "Research", icon: BookOpen },
  { name: "Short Stories", path: "Stories", icon: BookOpen },
  { name: "Op-Eds", path: "OpEds", icon: MessageSquare },
  { name: "Satirical News", path: "Satirical", icon: Smile },
  { name: "Cartoons", path: "Cartoons", icon: ImageIcon },
  { name: "Puzzles", path: "Puzzles", icon: PuzzleIcon },
];

export default function Layout({ children }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap');
        
        :root {
          --serif: 'Playfair Display', 'Georgia', serif;
          --sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          --gothic: 'UnifrakturMaguntia', 'Old English Text MT', 'Blackletter', serif;
        }
        
        .font-serif {
          font-family: var(--serif);
        }
        
        .font-sans {
          font-family: var(--sans);
        }
        
        .font-gothic {
          font-family: var(--gothic);
        }
        
        .pointing-finger {
          font-size: 2rem;
          line-height: 1;
        }
      `}</style>

      {/* Header */}
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : 'border-b-2 border-black'
      }`}>
        <div className="max-w-7xl mx-auto">
          {/* Masthead */}
          <div className="border-b border-gray-200 py-6 px-4">
            <Link to={createPageUrl("Home")} className="block">
              <div className="text-center">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <span className="pointing-finger">☞</span>
                  <h1 className="font-gothic text-5xl md:text-7xl font-bold tracking-tight">
                    The Colonial
                  </h1>
                  <span className="pointing-finger">☜</span>
                </div>
                <p className="text-xs tracking-widest uppercase text-gray-600">
                  Literary Essays • Research • Satire • Stories
                </p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="overflow-x-auto">
            <div className="flex items-center justify-center gap-8 px-4 py-3 min-w-max">
              {sections.map((section) => (
                <Link
                  key={section.path}
                  to={createPageUrl(section.path)}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-amber-700 ${
                    location.pathname.includes(section.path.toLowerCase())
                      ? 'text-amber-700 font-semibold'
                      : 'text-gray-700'
                  }`}
                >
                  {section.name}
                </Link>
              ))}
              <Link
                to={createPageUrl("About")}
                className={`flex items-center gap-1 text-sm font-medium tracking-wide uppercase transition-colors hover:text-amber-700 ${
                  location.pathname.includes('about')
                    ? 'text-amber-700 font-semibold'
                    : 'text-gray-700'
                }`}
              >
                <Info className="w-4 h-4" />
                About
              </Link>
              <Link
                to={createPageUrl("EditorDashboard")}
                className={`flex items-center gap-1 text-sm font-medium tracking-wide uppercase transition-colors hover:text-blue-700 ${
                  location.pathname.includes('editordashboard')
                    ? 'text-blue-700 font-semibold'
                    : 'text-gray-700'
                }`}
              >
                <Settings className="w-4 h-4" />
                Editor
              </Link>
              <Link
                to={createPageUrl("Donate")}
                className="flex items-center gap-1 text-sm font-medium tracking-wide uppercase text-red-600 hover:text-red-700"
              >
                <Heart className="w-4 h-4" />
                Donate
              </Link>
              <Link
                to={createPageUrl("Submit")}
                className="flex items-center gap-1 text-sm font-medium tracking-wide uppercase text-amber-700 hover:text-amber-800"
              >
                <Plus className="w-4 h-4" />
                Submit
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-gothic text-3xl font-bold mb-4">The Colonial</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                An independent publication featuring essays, research, stories, and satire 
                from diverse voices and perspectives.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 tracking-wide uppercase text-sm">Sections</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                {sections.slice(0, 6).map(section => (
                  <Link 
                    key={section.path} 
                    to={createPageUrl(section.path)}
                    className="hover:text-white transition-colors"
                  >
                    {section.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 tracking-wide uppercase text-sm">Support Us</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                The Colonial is reader-supported. Your donations help us continue publishing 
                quality independent journalism and creative work.
              </p>
              <Link 
                to={createPageUrl("Donate")}
                className="inline-flex items-center gap-2 text-sm font-medium text-red-400 hover:text-red-300 transition-colors"
              >
                <Heart className="w-4 h-4" />
                Support The Colonial
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} The Colonial. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
