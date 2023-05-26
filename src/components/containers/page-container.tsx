interface PageContainerProps {
    children: React.ReactNode;
    className?: string; 
}

function PageContainer({children, className}: PageContainerProps) {
    return ( 
        <div className={`container max-w-5xl ${className}`}>
            {children}
        </div>
     );
}

export default PageContainer;