import Link from "next/link"
import { ArrowLeft, FileText, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ModelPaper7thHindiSA2() {

    // ⚠️ Space handled using %20
    const pdfPath = "/pdfs/VC%20PUBLICATIOS-7-SA-2-2025-26-Model%20Paper.pdf"

    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16 text-center">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                    Class 7 Hindi - SA-2 Model Paper
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
                                VC Publications - Class 7 SA-2 Model Paper
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="text-center space-y-6">

                            {/* Buttons Container */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">

                                {/* View PDF */}
                                <a href={pdfPath} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                    <Button className="w-full sm:w-56 bg-blue-600 hover:bg-blue-700 text-white py-5 text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                                        <Eye className="mr-2 h-5 w-5" />
                                        View PDF
                                    </Button>
                                </a>

                                {/* Download PDF */}
                                <a href={pdfPath} download className="w-full sm:w-auto">
                                    <Button className="w-full sm:w-56 bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-5 text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                                        <Download className="mr-2 h-5 w-5" />
                                        Download
                                    </Button>
                                </a>

                            </div>

                        </CardContent>
                    </Card>

                    {/* Back Button */}
                    <div className="text-center mt-10">
                        <Link href="/7th-hindi-sa-2-model-papers">
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