
export const PageFooter = () => {
    return (
        <footer className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 py-5 text-center border-t max-w-7xl mx-auto">
            <p>&copy; {new Date().getFullYear()} TATTOOMI Tattoo Studio. All rights reserved.</p>
            <p>Designed and built by Vishal Rajdeep</p>
        </footer>
    )
}
