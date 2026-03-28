import Link from "next/link"
import { ArrowLeft, FileText, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ModelPaper1() {
    // ⚠️ Space handled using %20
    const pdfPath = "/pdfs/VC%20PUBLICATIOS-8-SA-2-2025-26-Model%20Paper.pdf"

    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16 text-center">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                    SA-2 Model Paper
                </h1>
                <p className="text-lg text-gray-600">
                    View and download your PDF easily 📄
                </p>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4">

                    <Card className="shadow-xl">
                        <CardHeader className="text-center">
                            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileText className="h-8 w-8 text-white" />
                            </div>
                            <CardTitle className="text-2xl">
                                VC Publications - SA 2 Model Paper
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="text-center space-y-6">

                            {/* View PDF */}
                            <a href={pdfPath} target="_blank" rel="noopener noreferrer">
                                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 text-lg">
                                    <Eye className="mr-2 h-5 w-5" />
                                    View PDF
                                </Button>
                            </a>

                            {/* Download PDF */}
                            <a href={pdfPath} download>
                                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-5 text-lg">
                                    <Download className="mr-2 h-5 w-5" />
                                    Download PDF
                                </Button>
                            </a>

                        </CardContent>
                    </Card>

                    {/* Back Button */}
                    <div className="text-center mt-10">
                        <Link href="/8th-hindi-model-papers">
                            <Button className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-3">
                                <ArrowLeft className="mr-2 h-5 w-5" />
                                Back
                            </Button>
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    )
}