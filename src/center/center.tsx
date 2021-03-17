export const Center = ({ app, children }: { app?: boolean; children: any }) => {
    return (
        <div
            className="center"
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: `80${app ? 'vh' : '%'}`,
            }}
        >
            {children}
        </div>
    );
};
