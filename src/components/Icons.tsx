import {
    AlertTriangle,
    ArrowRight,
    Check,
    ChevronLeft,
    ChevronRight,
    CircuitBoardIcon,
    Command,
    CreditCard,
    File,
    FileText,
    HelpCircle,
    Image,
    Laptop,
    LayoutDashboardIcon,
    Loader2,
    LogIn,
    LucideIcon,
    LucideProps,
    Moon,
    MoreVertical,
    Pizza,
    Plus,
    Settings,
    SunMedium,
    Trash,
    Twitter,
    User,
    User2Icon,
    UserX2Icon,
    Truck,
    X,
    Landmark,
    Wallet,
    HandCoins,
    Receipt,
    Home,
    DollarSign,
    Bolt,
  } from "lucide-react";
  
  export type Icon = LucideIcon;
  
  export const Icons = {
    dashboard: LayoutDashboardIcon,
    logo: Truck,
    login: LogIn,
    close: X,
    profile: User2Icon,
    spinner: Loader2,
    kanban: CircuitBoardIcon,
    chevronLeft: ChevronLeft,
    chevronRight: ChevronRight,
    trash: Trash,
    employee: UserX2Icon,
    post: FileText,
    page: File,
    media: Image,
    settings: Settings,
    billing: CreditCard,
    ellipsis: MoreVertical,
    add: Plus,
    warning: AlertTriangle,
    user: User,
    arrowRight: ArrowRight,
    help: HelpCircle,
    pizza: Pizza,
    sun: SunMedium,
    moon: Moon,
    laptop: Laptop,
    landmark: Landmark,
    wallet: Wallet,
    handCoins: HandCoins,
    receipt: Receipt,
    home: Home,
    dollarSign: DollarSign,
    bolt: Bolt,
    pegasus: ({...props}: LucideProps) => (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100" 
        id="Pegasus"
        {...props}
        >
        <path d="M52.7 87.9v2h-19c0-5.8 2.5-11.2 7-15 3.4-2.8 5.5-6.8 6-11.2 7.9-.9 14.1-7.7 14.1-15.9 0-3.4-1.1-6.7-3.1-9.5-.7-.9-1.9-1.1-2.8-.4-.9.7-1.1 1.9-.4 2.8 1.5 2.1 2.3 4.5 2.3 7.1 0 6.6-5.4 12-12 12-2.6 0-5-.8-7.1-2.3-.8-.6-1.9-.5-2.6.2l-8.9 8.9c-1.2 1.2-2.7 1.8-4.3 1.8-1.6 0-3.2-.7-4.3-1.9L11 59.6c-2.1-2.2-2.2-5.6-.3-7.9l21.6-26.6c.4-.5.5-1.1.4-1.6-.1-.6-.5-1.1-1-1.4-3.1-1.8-3.5-7.6-3.3-12.1 3.4 3.6 9.6 8.6 18.9 10.2 19.2 2.6 30.5 13.1 34.4 32 1 4.8 1.3 9.2.8 13.6h-7.9c-12 .1-21.9 10-21.9 22.1zm22-18c-9.9 0-18 8.1-18 18v2h15c4.4 0 8-3.6 8-8v-2c0-1.1.9-2 2-2h1c4.4 0 8-3.6 8-8h-16z" fill="#f8fcfa" className="color000000 svgShape"></path>
      </svg>
    ),
    pegasus2: ({...props}: LucideProps) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="256" height="256" {...props}><circle cx="42.5" cy="30.5" r="18.5" fill="#c4cde7" className="colore7d1c4 svgShape"></circle><path fill="#ffffff" stroke="#1d44b8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M42 21h-5 0v-4a5 5 0 0 1 5-5h0v9h0Z" className="colorfff svgShape colorStroke4c241d svgStroke"></path><path fill="#ffffff" stroke="#1d44b8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M42.092 57 42 41l5.739.495 2.676 2.23a5.843 5.843 0 0 0 7.873-.357h0a5.842 5.842 0 0 0 0-8.264l-16.2-16.2a19.2 19.2 0 0 0-19.2 19.2V57Z" className="colorfff svgShape colorStroke4c241d svgStroke"></path><path fill="#ffffff" stroke="#1d44b8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m42 41-1.528-.764A8.09 8.09 0 0 1 36 33h0" className="colorfff svgShape colorStroke4c241d svgStroke"></path><path fill="#9dafe4" stroke="#1d44b8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.222 57H33V46.773A11.773 11.773 0 0 0 21.227 35H3Z" className="color9dc1e4 svgShape colorStroke4c241d svgStroke"></path><path fill="none" stroke="#1d44b8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.571 41h15.572M7 46h10M9 51h5M47 31l-2-2" className="colorStroke4c241d svgStroke"></path></svg>
    ),
    google: ({ ...props }: LucideProps) => (
      <svg
        aria-hidden="true"
        focusable="false"
        data-icon="google"
        role="img"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 480 480" 
        {...props}
      >
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        <path d="M1 1h22v22H1z" fill="none"/>
      </svg>
    ),
    check: Check,
  };