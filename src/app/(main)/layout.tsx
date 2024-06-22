import Header from "@/components/common/header";


export default function MainLayout({
    
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body >
                <Header /> 
                <div className="ashen sam">
                    {children}
                </div>  
            </body>
        </html>
    );
}
