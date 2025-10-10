import { cn } from '@/lib/utils'

export function DownloadButton({
  className,
}: {
  className?: string
}) {
    function handleDownloadResume() {
        const resumeUrl = '/resume/Tarek-Alzein.pdf'
        const link = document.createElement('a')
        link.target = '_target'
        link.href = resumeUrl
        link.click()
      }
  return (
    <button
    onClick={handleDownloadResume}
    className={cn("group relative px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 cursor-pointer", className)}
  >
    <span className="relative z-10 flex items-center gap-2">
      📄 Download Resume
    </span>
    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
  </button>
  )
}