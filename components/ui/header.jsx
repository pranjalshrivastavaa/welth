import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Link } from "lucide-react";

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 bborder-b">
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
      <Link href = "/">
      <Image  src={"/logo.png"} 
      alt="welth logo" 
      height={60} 
      width={200}
      className = "h-12 w-auto object-contain"
      />
      
      </Link>

      <SignedOut>
        <SignInButton />
        
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
  
      </nav>
    </div>
  );
};

export default Header;
