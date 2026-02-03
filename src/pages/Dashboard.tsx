import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Settings,
  Upload,
  Eye,
  RefreshCw,
  Download,
  Trash2,
  Plus,
  Search,
  Bell,
  ChevronDown,
  LogOut,
  User,
  CreditCard,
  HelpCircle,
  MoreVertical,
  Shirt,
  Wand2,
  Sliders,
  ZoomIn,
  RotateCcw,
  FolderOpen,
} from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext"

const API_BASE = import.meta.env.VITE_API_URL || 'https://web.dressr.app'

// Sidebar Navigation - Only functional features
const sidebarItems = [
  { icon: Wand2, label: "Try-On Studio", id: "studio" },
  { icon: FolderOpen, label: "Catalog", id: "catalog" },
  { icon: Settings, label: "Settings", id: "settings" },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("studio")
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  // Get user initials
  const getInitials = (name?: string, email?: string) => {
    if (name) {
      return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    }
    if (email) {
      return email[0].toUpperCase()
    }
    return 'U'
  }

  return (
    <div className="min-h-screen bg-[#fafafa] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 fixed h-full">
        <div className="p-6 border-b border-gray-100">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
              <span className="text-white font-sign text-sm">d</span>
            </div>
            <span className="font-sign text-xl">dressr</span>
          </Link>
        </div>
        
        <nav className="px-3 py-4 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === item.id 
                  ? "bg-[#1a1a1a] text-white" 
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold">Pro Plan</p>
              <span className="text-xs text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">65%</span>
            </div>
            <p className="text-xs text-gray-500 mb-3">32,450 / 50,000 try-ons</p>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#1a1a1a] rounded-full" style={{ width: '65%' }} />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64">
        {/* Top Bar */}
        <header className="h-16 border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input placeholder="Search..." className="pl-9 w-72 bg-gray-50 border-gray-200 rounded-xl focus:bg-white transition-colors" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative hover:bg-gray-100 rounded-xl">
              <Bell className="w-4 h-4 text-gray-600" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2 hover:bg-gray-100 rounded-xl px-3">
                  {user?.picture ? (
                    <img src={user.picture} alt={user.name || 'User'} className="w-8 h-8 rounded-full object-cover" />
                  ) : (
                    <div className="w-8 h-8 bg-[#1a1a1a] rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-white">{getInitials(user?.name, user?.email)}</span>
                    </div>
                  )}
                  <span className="text-sm font-medium text-gray-700">{user?.name || user?.email || 'User'}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 rounded-xl border-gray-200 p-2 bg-white">
                <div className="px-3 py-2 mb-2">
                  <p className="font-medium text-gray-900">{user?.name || 'User'}</p>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>
                <DropdownMenuSeparator className="bg-gray-100" />
                <DropdownMenuItem className="rounded-lg cursor-pointer" onClick={() => setActiveTab('settings')}>
                  <User className="w-4 h-4 mr-2" /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-lg cursor-pointer" onClick={() => setActiveTab('settings')}>
                  <CreditCard className="w-4 h-4 mr-2" /> Billing
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-lg cursor-pointer" onClick={() => setActiveTab('settings')}>
                  <Settings className="w-4 h-4 mr-2" /> Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-lg cursor-pointer">
                  <HelpCircle className="w-4 h-4 mr-2" /> Help Center
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-100" />
                <DropdownMenuItem className="rounded-lg cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50" onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2" /> Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8">
          {activeTab === "studio" && <StudioTab />}
          {activeTab === "catalog" && <CatalogTab />}
          {activeTab === "settings" && <SettingsTab />}
        </div>
      </main>
    </div>
  )
}

interface TryOnHistoryItem {
  _id: string
  person_image_url: string
  garment_image_url: string
  results: { url: string }[]
  created_at: string
}

// Studio Tab - Virtual Try-On
function StudioTab() {
  const [modelImage, setModelImage] = useState<{ file: File; preview: string } | null>(null)
  const [garmentImage, setGarmentImage] = useState<{ file: File; preview: string } | null>(null)
  const [processing, setProcessing] = useState(false)
  const [result, setResult] = useState<{ data: string; mime_type: string; url?: string } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [history, setHistory] = useState<TryOnHistoryItem[]>([])
  const [selectedGarment, setSelectedGarment] = useState<number | null>(null)
  const [dragOver, setDragOver] = useState<'model' | 'garment' | null>(null)
  const [success, setSuccess] = useState(false)
  const { user } = useAuth()

  // Handle drag and drop for images
  const handleDrop = (e: React.DragEvent, type: 'model' | 'garment') => {
    e.preventDefault()
    setDragOver(null)
    const file = e.dataTransfer.files?.[0]
    if (file && file.type.startsWith('image/')) {
      const imageData = { file, preview: URL.createObjectURL(file) }
      if (type === 'model') {
        setModelImage(imageData)
      } else {
        setGarmentImage(imageData)
        setSelectedGarment(null)
      }
      setResult(null)
      setError(null)
    }
  }

  const handleDragOver = (e: React.DragEvent, type: 'model' | 'garment') => {
    e.preventDefault()
    setDragOver(type)
  }

  const handleDragLeave = () => {
    setDragOver(null)
  }

  // Fetch user's try-on history
  useEffect(() => {
    const fetchHistory = async () => {
      if (!user?.email) return
      try {
        const response = await fetch(`${API_BASE}/images/history/${encodeURIComponent(user.email)}`)
        if (response.ok) {
          const data = await response.json()
          setHistory(data.history || [])
        }
      } catch (err) {
        console.error('Failed to fetch history:', err)
      }
    }
    fetchHistory()
  }, [user?.email])

  const garments = [
    { id: 1, name: "Classic White Tee", category: "Tops", image: "https://ext.same-assets.com/2206706892/1993143932.jpeg" },
    { id: 2, name: "Denim Jacket", category: "Outerwear", image: "https://ext.same-assets.com/2206706892/2095848760.jpeg" },
    { id: 3, name: "Summer Dress", category: "Dresses", image: "https://ext.same-assets.com/2206706892/2840946787.jpeg" },
    { id: 4, name: "Slim Fit Jeans", category: "Bottoms", image: null },
    { id: 5, name: "Blazer", category: "Outerwear", image: null },
    { id: 6, name: "Floral Blouse", category: "Tops", image: null },
  ]

  const handleModelUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setModelImage({ file, preview: URL.createObjectURL(file) })
      setResult(null)
      setError(null)
    }
  }

  const handleGarmentUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setGarmentImage({ file, preview: URL.createObjectURL(file) })
      setResult(null)
      setError(null)
    }
  }

  const handleGenerate = async () => {
    if (!modelImage || !garmentImage) {
      setError('Please upload both a model image and a garment image')
      return
    }

    setProcessing(true)
    setError(null)
    setResult(null)
    setSuccess(false)

    try {
      const formData = new FormData()
      formData.append('person_image', modelImage.file)
      formData.append('product_image', garmentImage.file)
      if (user?.email) {
        formData.append('user_id', user.email)
      }

      const response = await fetch(`${API_BASE}/try-on/`, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const err = await response.json().catch(() => ({ detail: 'Try-on failed' }))
        throw new Error(err.detail || 'Try-on failed')
      }

      const data = await response.json()
      console.log('Try-on response:', data)
      
      // Get first image from response
      if (data.images && data.images.length > 0) {
        const img = data.images[0]
        console.log('Image data length:', img.data?.length, 'mime:', img.mime_type)
        setResult({
          data: img.data,
          mime_type: img.mime_type || 'image/jpeg',
          url: data.result_urls?.[0]
        })
        setSuccess(true)
        // Refresh history after successful try-on
        if (user?.email) {
          const historyResponse = await fetch(`${API_BASE}/images/history/${encodeURIComponent(user.email)}`)
          if (historyResponse.ok) {
            const historyData = await historyResponse.json()
            setHistory(historyData.history || [])
          }
        }
      } else {
        setError('No images returned from API')
      }
    } catch (err) {
      console.error('Try-on error:', err)
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setProcessing(false)
    }
  }

  const downloadResult = () => {
    if (result) {
      const link = document.createElement('a')
      link.href = result.url || `data:${result.mime_type};base64,${result.data}`
      link.download = `try-on-result.jpg`
      link.click()
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif">Try-On Studio</h1>
          <p className="text-gray-500">Create and preview virtual try-ons</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 rounded-full border-gray-200" onClick={() => { setModelImage(null); setGarmentImage(null); setResult(null); setError(null); }}><RotateCcw className="w-4 h-4" /> Reset</Button>
          <Button className="gap-2 rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white" onClick={downloadResult} disabled={!result}><Download className="w-4 h-4" /> Export</Button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm flex items-center justify-between">
          <span>{error}</span>
          <button onClick={() => setError(null)} className="text-red-400 hover:text-red-600">×</button>
        </div>
      )}

      {success && (
        <div className="bg-green-50 text-green-600 p-4 rounded-xl text-sm flex items-center justify-between">
          <span>Try-on generated successfully! Click Export to download.</span>
          <button onClick={() => setSuccess(false)} className="text-green-400 hover:text-green-600">×</button>
        </div>
      )}

      <div className="grid grid-cols-12 gap-6">
        {/* Left Panel - Upload Images */}
        <div className="col-span-3 space-y-4">
          {/* Model Image Upload */}
          <div className="bg-white rounded-2xl p-5 shadow-none border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">Model Image</h3>
              {modelImage && (
                <button 
                  onClick={(e) => { e.stopPropagation(); setModelImage(null); setResult(null); }}
                  className="text-xs text-gray-400 hover:text-red-500 transition-colors"
                >
                  Remove
                </button>
              )}
            </div>
            <div 
              className={`aspect-[3/4] rounded-xl border-2 border-dashed flex items-center justify-center overflow-hidden cursor-pointer transition-all ${
                dragOver === 'model' ? 'border-blue-400 bg-blue-50 scale-[1.02]' :
                modelImage ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300'
              }`}
              onClick={() => document.getElementById('model-upload')?.click()}
              onDrop={(e) => handleDrop(e, 'model')}
              onDragOver={(e) => handleDragOver(e, 'model')}
              onDragLeave={handleDragLeave}
            >
              {modelImage ? (
                <img src={modelImage.preview} alt="Model" className="w-full h-full object-cover" />
              ) : (
                <div className="text-center p-4">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Drop or click to upload</p>
                  <p className="text-xs text-gray-400 mt-1">Person photo</p>
                </div>
              )}
            </div>
            <input id="model-upload" type="file" accept="image/*" className="hidden" onChange={handleModelUpload} />
          </div>

          {/* Garment Image Upload */}
          <div className="bg-white rounded-2xl p-5 shadow-none border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">Garment Image</h3>
              {garmentImage && (
                <button 
                  onClick={(e) => { e.stopPropagation(); setGarmentImage(null); setSelectedGarment(null); setResult(null); }}
                  className="text-xs text-gray-400 hover:text-red-500 transition-colors"
                >
                  Remove
                </button>
              )}
            </div>
            <div 
              className={`aspect-square rounded-xl border-2 border-dashed flex items-center justify-center overflow-hidden cursor-pointer transition-all ${
                dragOver === 'garment' ? 'border-blue-400 bg-blue-50 scale-[1.02]' :
                garmentImage ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300'
              }`}
              onClick={() => document.getElementById('garment-upload')?.click()}
              onDrop={(e) => handleDrop(e, 'garment')}
              onDragOver={(e) => handleDragOver(e, 'garment')}
              onDragLeave={handleDragLeave}
            >
              {garmentImage ? (
                <img src={garmentImage.preview} alt="Garment" className="w-full h-full object-cover" />
              ) : (
                <div className="text-center p-4">
                  <Shirt className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Drop or click to upload</p>
                  <p className="text-xs text-gray-400 mt-1">Clothing item</p>
                </div>
              )}
            </div>
            <input id="garment-upload" type="file" accept="image/*" className="hidden" onChange={handleGarmentUpload} />
          </div>

          {/* Or Select from Catalog */}
          <div className="bg-white rounded-2xl p-5 shadow-none border border-gray-100">
            <h3 className="font-semibold mb-3">Or Select from Catalog</h3>
            <div className="grid grid-cols-3 gap-2">
              {garments.filter(g => g.image).map((garment) => (
                <div
                  key={garment.id}
                  onClick={async () => {
                    if (garment.image) {
                      setSelectedGarment(garment.id)
                      // Fetch the image and convert to file
                      const response = await fetch(garment.image)
                      const blob = await response.blob()
                      const file = new File([blob], `${garment.name}.jpg`, { type: 'image/jpeg' })
                      setGarmentImage({ file, preview: garment.image })
                      setResult(null)
                    }
                  }}
                  className={`aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                    selectedGarment === garment.id ? 'border-[#1a1a1a]' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img src={garment.image!} alt={garment.name} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center - Preview Canvas */}
        <div className="col-span-6">
          <div className="bg-white rounded-2xl p-6 shadow-none border border-gray-100 h-full flex flex-col">
            <div className="flex-1 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center relative overflow-hidden min-h-[500px]">
              {result ? (
                <img 
                  src={result.url || `data:${result.mime_type || 'image/jpeg'};base64,${result.data}`} 
                  alt="Try-on result" 
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    console.error('Image load error:', result)
                    e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>'
                  }}
                />
              ) : modelImage ? (
                <img src={modelImage.preview} alt="Model preview" className="max-w-full max-h-full object-contain opacity-50" />
              ) : (
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wand2 className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="font-medium mb-2">Virtual Try-On</p>
                  <p className="text-sm text-gray-400">Upload a model image and garment to get started</p>
                </div>
              )}

              {/* Processing Overlay */}
              {processing && (
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-[#1a1a1a]" />
                    <p className="font-medium">Processing try-on...</p>
                    <p className="text-sm text-gray-400">This may take a moment</p>
                  </div>
                </div>
              )}
            </div>

            {/* Canvas Controls */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-xl border-gray-200"><ZoomIn className="w-4 h-4" /></Button>
                <Button variant="outline" size="icon" className="rounded-xl border-gray-200"><RotateCcw className="w-4 h-4" /></Button>
              </div>
              <Button 
                className="gap-2 rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white" 
                disabled={!modelImage || !garmentImage || processing}
                onClick={handleGenerate}
              >
                <Wand2 className="w-4 h-4" /> {processing ? 'Processing...' : 'Generate Try-On'}
              </Button>
            </div>
          </div>
        </div>

        {/* Right Panel - Settings & Adjustments */}
        <div className="col-span-3 space-y-4">
          <div className="bg-white rounded-2xl p-5 shadow-none border border-gray-100">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Sliders className="w-4 h-4" /> Adjustments
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block text-gray-700">Quality</label>
                <div className="flex gap-2">
                  {["Low", "Medium", "High"].map((q, i) => (
                    <Button key={q} variant="outline" size="sm" className={`flex-1 rounded-lg border-gray-200 ${i === 2 ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]' : ''}`}>
                      {q}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block text-gray-700">Fit</label>
                <div className="flex gap-2">
                  {["Tight", "Regular", "Loose"].map((f, i) => (
                    <Button key={f} variant="outline" size="sm" className={`flex-1 rounded-lg border-gray-200 ${i === 1 ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]' : ''}`}>
                      {f}
                    </Button>
                  ))}
                </div>
              </div>
              <Separator className="bg-gray-100" />
              <div>
                <label className="text-sm font-medium mb-2 block text-gray-700">Size Adjustment</label>
                <Input type="range" className="w-full" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block text-gray-700">Position X</label>
                <Input type="range" className="w-full" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block text-gray-700">Position Y</label>
                <Input type="range" className="w-full" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-none border border-gray-100">
            <h3 className="font-semibold mb-4">Output Settings</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Format</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-lg font-medium">PNG</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Resolution</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-lg font-medium">1024x1024</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Background</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-lg font-medium">Transparent</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Try-On History */}
      {history.length > 0 && (
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Try-Ons</h2>
            <span className="text-sm text-gray-400">{history.length} total</span>
          </div>
          <div className="grid grid-cols-6 gap-4">
            {history.slice(0, 6).map((item) => (
              <div 
                key={item._id} 
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden cursor-pointer hover:border-gray-300 hover:shadow-md transition-all"
                onClick={() => {
                  if (item.results?.[0]?.url) {
                    setResult({ data: '', mime_type: 'image/jpeg', url: item.results[0].url })
                  }
                }}
              >
                <div className="aspect-[3/4] relative">
                  <img 
                    src={item.results?.[0]?.url} 
                    alt="Try-on result" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-2 text-center">
                  <p className="text-xs text-gray-400">
                    {new Date(item.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Catalog Tab
function CatalogTab() {
  const catalogImages = [
    "https://ext.same-assets.com/2206706892/1993143932.jpeg",
    "https://ext.same-assets.com/2206706892/2095848760.jpeg",
    "https://ext.same-assets.com/2206706892/2840946787.jpeg",
    "https://ext.same-assets.com/2206706892/3497204393.jpeg",
    "https://ext.same-assets.com/2206706892/1753995726.jpeg",
    "https://ext.same-assets.com/2206706892/1882702108.jpeg",
  ]
  
  const garments = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: ["Blue Blouse", "Pink Bag", "Red Skirt", "Summer Dress", "Casual Top", "Denim Jacket", "Floral Dress", "White Tee", "Blazer", "Slim Jeans", "Cardigan", "Maxi Dress"][i],
    category: ["Tops", "Accessories", "Bottoms", "Dresses", "Tops", "Outerwear", "Dresses", "Tops", "Outerwear", "Bottoms", "Tops", "Dresses"][i],
    status: ["active", "active", "active", "processing", "active", "active", "active", "active", "processing", "active", "active", "active"][i],
    tryOns: Math.floor(Math.random() * 1000) + 100,
    image: catalogImages[i % catalogImages.length],
  }))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif">Garment Catalog</h1>
          <p className="text-gray-500">Manage your product catalog for virtual try-on</p>
        </div>
        <Button className="gap-2 rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white"><Plus className="w-4 h-4" /> Add Garment</Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input placeholder="Search garments..." className="pl-9 rounded-xl bg-white border-gray-200" />
        </div>
        <Button variant="outline" className="rounded-full border-gray-200">All Categories</Button>
        <Button variant="outline" className="rounded-full border-gray-200">Status</Button>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {garments.map((garment) => (
          <div key={garment.id} className="group bg-white rounded-2xl overflow-hidden shadow-none border border-gray-100 hover:border-gray-200 transition-colors">
            <div className="aspect-square bg-gray-100 relative overflow-hidden">
              <img src={garment.image} alt={garment.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Button size="icon" className="rounded-full bg-white text-gray-900 hover:bg-gray-100"><Eye className="w-4 h-4" /></Button>
                <Button size="icon" className="rounded-full bg-white text-gray-900 hover:bg-gray-100"><Wand2 className="w-4 h-4" /></Button>
                <Button size="icon" className="rounded-full bg-white text-gray-900 hover:bg-gray-100"><Trash2 className="w-4 h-4" /></Button>
              </div>
              <span className={`absolute top-3 right-3 text-xs px-2 py-1 rounded-full font-medium ${garment.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                {garment.status}
              </span>
            </div>
            <div className="p-4">
              <p className="font-medium truncate">{garment.name}</p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-sm text-gray-400">{garment.category}</span>
                <span className="text-sm text-gray-400">{garment.tryOns} try-ons</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Settings Tab
function SettingsTab() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-serif">Settings</h1>
        <p className="text-gray-500">Manage your account and preferences</p>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="bg-gray-100 p-1 rounded-xl">
          <TabsTrigger value="general" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-none">General</TabsTrigger>
          <TabsTrigger value="team" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-none">Team</TabsTrigger>
          <TabsTrigger value="billing" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-none">Billing</TabsTrigger>
          <TabsTrigger value="notifications" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-none">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-6 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-none border border-gray-100">
            <h3 className="text-lg font-semibold mb-4">Organization</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-700">Organization Name</label>
                  <Input defaultValue="Acme Fashion Inc." className="rounded-xl border-gray-200" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-700">Website</label>
                  <Input defaultValue="https://acmefashion.com" className="rounded-xl border-gray-200" />
                </div>
              </div>
              <Button className="rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white">Save Changes</Button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-none border border-gray-100">
            <h3 className="text-lg font-semibold mb-1">Branding</h3>
            <p className="text-sm text-gray-500 mb-4">Customize the try-on experience for your customers</p>
            <div className="space-y-4">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center">
                  <Upload className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="font-medium">Logo</p>
                  <p className="text-sm text-gray-500 mb-2">Upload your company logo</p>
                  <Button variant="outline" size="sm" className="rounded-full border-gray-200">Upload</Button>
                </div>
              </div>
              <Separator className="bg-gray-100" />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-700">Primary Color</label>
                  <div className="flex gap-2">
                    <div className="w-10 h-10 bg-[#1a1a1a] rounded-xl" />
                    <Input defaultValue="#1a1a1a" className="flex-1 rounded-xl border-gray-200" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-700">Accent Color</label>
                  <div className="flex gap-2">
                    <div className="w-10 h-10 bg-gray-500 rounded-xl" />
                    <Input defaultValue="#6b7280" className="flex-1 rounded-xl border-gray-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="team" className="mt-6">
          <div className="bg-white rounded-2xl p-6 shadow-none border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold">Team Members</h3>
                <p className="text-sm text-gray-500">Manage who has access to your dashboard</p>
              </div>
              <Button className="gap-2 rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white"><Plus className="w-4 h-4" /> Invite Member</Button>
            </div>
            <div className="space-y-3">
              {[
                { name: "John Doe", email: "john@acme.com", role: "Owner" },
                { name: "Jane Smith", email: "jane@acme.com", role: "Admin" },
                { name: "Bob Wilson", email: "bob@acme.com", role: "Developer" },
              ].map((member, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-gray-600">{member.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-gray-500">{member.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs bg-gray-200 px-3 py-1 rounded-full font-medium">{member.role}</span>
                    <Button variant="ghost" size="icon" className="rounded-xl hover:bg-gray-100"><MoreVertical className="w-4 h-4" /></Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="billing" className="mt-6">
          <div className="bg-white rounded-2xl p-6 shadow-none border border-gray-100">
            <h3 className="text-lg font-semibold mb-4">Current Plan</h3>
            <div className="flex items-center justify-between p-6 bg-gray-50 rounded-xl">
              <div>
                <p className="text-2xl font-semibold">Pro Plan</p>
                <p className="text-gray-500">$99/month • 50,000 try-ons</p>
              </div>
              <Button variant="outline" className="rounded-full border-gray-200">Upgrade Plan</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <div className="bg-white rounded-2xl p-6 shadow-none border border-gray-100">
            <h3 className="text-lg font-semibold mb-4">Email Notifications</h3>
            <div className="space-y-4">
              {[
                { label: "Weekly usage reports", desc: "Receive a summary of your API usage", enabled: true },
                { label: "Usage alerts", desc: "Get notified when approaching limits", enabled: true },
                { label: "Product updates", desc: "Learn about new features and improvements", enabled: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`rounded-full ${item.enabled ? 'bg-[#1a1a1a] text-white border-[#1a1a1a] hover:bg-[#2a2a2a]' : 'border-gray-200'}`}
                  >
                    {item.enabled ? 'Enabled' : 'Disabled'}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
