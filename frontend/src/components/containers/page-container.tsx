interface PageContainerProps {
    children: React.ReactNode;
    className?: string; 
}

function PageContainer({children, className}: PageContainerProps) {
    return ( 
        <div className={`container max-w-[1600px] ${className}`}>
            {children}
        </div>
     );
}

export default PageContainer;