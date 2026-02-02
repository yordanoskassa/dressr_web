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
  Layers,
  FolderOpen,
  Palette,
  Users,
  Camera,
  Eraser,
  Check,
  Zap,
} from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext"

const API_BASE = import.meta.env.VITE_API_URL || 'https://web.dressr.app'

// Sidebar Navigation - Reorganized for catalog generation focus
const sidebarItems = [
  { icon: Zap, label: "Quick Create", id: "quick-create" },
  { icon: Camera, label: "AI Photoshoot", id: "photoshoot" },
  { icon: Users, label: "Virtual Models", id: "models" },
  { icon: Eraser, label: "Background", id: "background" },
  { icon: Layers, label: "Batch Edit", id: "batch" },
  { icon: FolderOpen, label: "Assets", id: "assets" },
  { icon: Palette, label: "Brand Kit", id: "brand" },
  { icon: Settings, label: "Settings", id: "settings" },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("quick-create")
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
          {activeTab === "quick-create" && <QuickCreateTab />}
          {activeTab === "photoshoot" && <PhotoshootTab />}
          {activeTab === "models" && <VirtualModelsTab />}
          {activeTab === "background" && <BackgroundTab />}
          {activeTab === "batch" && <BatchEditTab />}
          {activeTab === "assets" && <AssetsTab />}
          {activeTab === "brand" && <BrandKitTab />}
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

// Quick Create Tab - Fast workflow for common tasks
function QuickCreateTab() {
  const quickActions = [
    { icon: Camera, title: "AI Photoshoot", desc: "Generate lifestyle product shots", color: "bg-purple-500" },
    { icon: Users, title: "Add Model", desc: "Put garments on virtual models", color: "bg-blue-500" },
    { icon: Eraser, title: "Remove Background", desc: "Clean product backgrounds", color: "bg-green-500" },
    { icon: Layers, title: "Batch Process", desc: "Edit multiple images at once", color: "bg-orange-500" },
  ]

  const recentProjects = [
    { name: "Summer Collection", images: 24, updated: "2 hours ago" },
    { name: "Fall Lookbook", images: 18, updated: "Yesterday" },
    { name: "Product Shots", images: 56, updated: "3 days ago" },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-serif mb-2">Welcome back</h1>
        <p className="text-gray-500">Create stunning product visuals in seconds</p>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-4 gap-4">
        {quickActions.map((action, i) => (
          <button
            key={i}
            className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all text-left"
          >
            <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <action.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-1">{action.title}</h3>
            <p className="text-sm text-gray-500">{action.desc}</p>
          </button>
        ))}
      </div>

      {/* Upload Zone */}
      <div className="bg-white rounded-2xl border-2 border-dashed border-gray-200 p-12 text-center hover:border-gray-300 transition-colors cursor-pointer">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Upload className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="font-semibold mb-2">Drop your product images here</h3>
        <p className="text-sm text-gray-500 mb-4">or click to browse • PNG, JPG up to 50MB</p>
        <Button className="rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white">
          <Plus className="w-4 h-4 mr-2" /> Upload Images
        </Button>
      </div>

      {/* Recent Projects */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Projects</h2>
          <Button variant="ghost" className="text-sm text-gray-500 hover:text-gray-900">View all</Button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {recentProjects.map((project, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-gray-200 transition-colors cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                  <FolderOpen className="w-5 h-5 text-gray-500" />
                </div>
                <div>
                  <h3 className="font-medium">{project.name}</h3>
                  <p className="text-xs text-gray-400">{project.images} images</p>
                </div>
              </div>
              <p className="text-xs text-gray-400">Updated {project.updated}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// AI Photoshoot Tab - Generate lifestyle product shots
function PhotoshootTab() {
  const [modelImage, setModelImage] = useState<{ file: File; preview: string } | null>(null)
  const [garmentImage, setGarmentImage] = useState<{ file: File; preview: string } | null>(null)
  const [processing, setProcessing] = useState(false)
  const [result, setResult] = useState<{ data: string; mime_type: string; url?: string } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [history, setHistory] = useState<TryOnHistoryItem[]>([])
  const [selectedGarment, setSelectedGarment] = useState<number | null>(null)
  const { user } = useAuth()

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
        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-12 gap-6">
        {/* Left Panel - Upload Images */}
        <div className="col-span-3 space-y-4">
          {/* Model Image Upload */}
          <div className="bg-white rounded-2xl p-5 shadow-none border border-gray-100">
            <h3 className="font-semibold mb-3">Model Image</h3>
            <div 
              className={`aspect-[3/4] rounded-xl border-2 border-dashed flex items-center justify-center overflow-hidden cursor-pointer transition-all ${
                modelImage ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300'
              }`}
              onClick={() => document.getElementById('model-upload')?.click()}
            >
              {modelImage ? (
                <img src={modelImage.preview} alt="Model" className="w-full h-full object-cover" />
              ) : (
                <div className="text-center p-4">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Upload person photo</p>
                </div>
              )}
            </div>
            <input id="model-upload" type="file" accept="image/*" className="hidden" onChange={handleModelUpload} />
          </div>

          {/* Garment Image Upload */}
          <div className="bg-white rounded-2xl p-5 shadow-none border border-gray-100">
            <h3 className="font-semibold mb-3">Garment Image</h3>
            <div 
              className={`aspect-square rounded-xl border-2 border-dashed flex items-center justify-center overflow-hidden cursor-pointer transition-all ${
                garmentImage ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300'
              }`}
              onClick={() => document.getElementById('garment-upload')?.click()}
            >
              {garmentImage ? (
                <img src={garmentImage.preview} alt="Garment" className="w-full h-full object-cover" />
              ) : (
                <div className="text-center p-4">
                  <Shirt className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Upload clothing item</p>
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
          <h2 className="text-lg font-semibold mb-4">Recent Try-Ons</h2>
          <div className="grid grid-cols-6 gap-4">
            {history.slice(0, 6).map((item) => (
              <div 
                key={item._id} 
                className="bg-white rounded-xl border border-gray-100 overflow-hidden cursor-pointer hover:border-gray-200 transition-colors"
                onClick={() => {
                  if (item.results?.[0]?.url) {
                    setResult({ data: '', mime_type: 'image/jpeg', url: item.results[0].url })
                  }
                }}
              >
                <div className="aspect-[3/4]">
                  <img 
                    src={item.results?.[0]?.url} 
                    alt="Try-on result" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Virtual Models Tab
function VirtualModelsTab() {
  const models = [
    { id: 1, name: "Sofia", ethnicity: "Hispanic", bodyType: "Athletic", image: "https://ext.same-assets.com/2206706892/1993143932.jpeg" },
    { id: 2, name: "Aisha", ethnicity: "African", bodyType: "Curvy", image: "https://ext.same-assets.com/2206706892/2095848760.jpeg" },
    { id: 3, name: "Emma", ethnicity: "Caucasian", bodyType: "Slim", image: "https://ext.same-assets.com/2206706892/2840946787.jpeg" },
    { id: 4, name: "Mei", ethnicity: "Asian", bodyType: "Petite", image: "https://ext.same-assets.com/2206706892/3497204393.jpeg" },
    { id: 5, name: "Priya", ethnicity: "South Asian", bodyType: "Average", image: "https://ext.same-assets.com/2206706892/1753995726.jpeg" },
    { id: 6, name: "Zara", ethnicity: "Middle Eastern", bodyType: "Tall", image: "https://ext.same-assets.com/2206706892/1882702108.jpeg" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif">Virtual Models</h1>
          <p className="text-gray-500">Choose diverse AI models for your product photography</p>
        </div>
        <Button className="gap-2 rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white">
          <Plus className="w-4 h-4" /> Create Custom Model
        </Button>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" className="rounded-full border-gray-200">All Models</Button>
        <Button variant="outline" className="rounded-full border-gray-200">Body Type</Button>
        <Button variant="outline" className="rounded-full border-gray-200">Ethnicity</Button>
        <Button variant="outline" className="rounded-full border-gray-200">Pose Style</Button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {models.map((model) => (
          <div key={model.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all cursor-pointer">
            <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden">
              <img src={model.image} alt={model.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button className="w-full rounded-full bg-white text-gray-900 hover:bg-gray-100">
                  <Users className="w-4 h-4 mr-2" /> Use Model
                </Button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1">{model.name}</h3>
              <div className="flex gap-2">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{model.ethnicity}</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{model.bodyType}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Background Tab
function BackgroundTab() {
  const backgrounds = [
    { id: 1, name: "Pure White", type: "solid", preview: "#ffffff" },
    { id: 2, name: "Light Gray", type: "solid", preview: "#f5f5f5" },
    { id: 3, name: "Studio", type: "gradient", preview: "linear-gradient(180deg, #f0f0f0 0%, #e0e0e0 100%)" },
    { id: 4, name: "Lifestyle", type: "scene", preview: "https://ext.same-assets.com/2206706892/1993143932.jpeg" },
    { id: 5, name: "Urban", type: "scene", preview: "https://ext.same-assets.com/2206706892/2095848760.jpeg" },
    { id: 6, name: "Nature", type: "scene", preview: "https://ext.same-assets.com/2206706892/2840946787.jpeg" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif">Background Studio</h1>
          <p className="text-gray-500">Remove, replace, or generate backgrounds for your products</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="aspect-video bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center cursor-pointer hover:border-gray-300 transition-colors">
              <div className="text-center">
                <Upload className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="font-medium mb-1">Drop your product image here</p>
                <p className="text-sm text-gray-400">PNG, JPG up to 50MB</p>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <Button className="flex-1 rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white">
                <Eraser className="w-4 h-4 mr-2" /> Remove Background
              </Button>
              <Button variant="outline" className="flex-1 rounded-full border-gray-200">
                <Wand2 className="w-4 h-4 mr-2" /> Generate Scene
              </Button>
            </div>
          </div>
        </div>

        <div className="col-span-4 space-y-4">
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <h3 className="font-semibold mb-4">Background Presets</h3>
            <div className="grid grid-cols-3 gap-2">
              {backgrounds.map((bg) => (
                <div
                  key={bg.id}
                  className="aspect-square rounded-lg cursor-pointer border-2 border-transparent hover:border-gray-300 transition-colors overflow-hidden"
                  style={{ background: bg.type === 'scene' ? `url(${bg.preview}) center/cover` : bg.preview }}
                />
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <h3 className="font-semibold mb-4">Custom Background</h3>
            <Input placeholder="Describe your background..." className="rounded-xl border-gray-200 mb-3" />
            <Button className="w-full rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white">
              <Wand2 className="w-4 h-4 mr-2" /> Generate
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Batch Edit Tab
function BatchEditTab() {
  const [selectedImages, setSelectedImages] = useState<number[]>([])
  
  const images = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    image: [
      "https://ext.same-assets.com/2206706892/1993143932.jpeg",
      "https://ext.same-assets.com/2206706892/2095848760.jpeg",
      "https://ext.same-assets.com/2206706892/2840946787.jpeg",
      "https://ext.same-assets.com/2206706892/3497204393.jpeg",
    ][i % 4],
  }))

  const toggleSelect = (id: number) => {
    setSelectedImages(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif">Batch Edit</h1>
          <p className="text-gray-500">Process multiple images at once</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-full border-gray-200">
            <Upload className="w-4 h-4 mr-2" /> Upload Images
          </Button>
          <Button 
            className="rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white"
            disabled={selectedImages.length === 0}
          >
            <Wand2 className="w-4 h-4 mr-2" /> Process {selectedImages.length > 0 ? `(${selectedImages.length})` : ''}
          </Button>
        </div>
      </div>

      <div className="flex gap-3">
        <Button 
          variant={selectedImages.length === images.length ? "default" : "outline"} 
          className="rounded-full border-gray-200"
          onClick={() => setSelectedImages(selectedImages.length === images.length ? [] : images.map(i => i.id))}
        >
          {selectedImages.length === images.length ? 'Deselect All' : 'Select All'}
        </Button>
        <Separator orientation="vertical" className="h-9" />
        <Button variant="outline" className="rounded-full border-gray-200">
          <Eraser className="w-4 h-4 mr-2" /> Remove BG
        </Button>
        <Button variant="outline" className="rounded-full border-gray-200">
          <Users className="w-4 h-4 mr-2" /> Add Model
        </Button>
        <Button variant="outline" className="rounded-full border-gray-200">
          <Wand2 className="w-4 h-4 mr-2" /> Enhance
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {images.map((img) => (
          <div 
            key={img.id} 
            className={`group bg-white rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
              selectedImages.includes(img.id) ? 'border-[#1a1a1a]' : 'border-gray-100 hover:border-gray-200'
            }`}
            onClick={() => toggleSelect(img.id)}
          >
            <div className="aspect-square bg-gray-100 relative overflow-hidden">
              <img src={img.image} alt={img.name} className="w-full h-full object-cover" />
              <div className={`absolute top-3 left-3 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                selectedImages.includes(img.id) ? 'bg-[#1a1a1a] border-[#1a1a1a]' : 'bg-white/80 border-gray-300'
              }`}>
                {selectedImages.includes(img.id) && <Check className="w-4 h-4 text-white" />}
              </div>
            </div>
            <div className="p-3">
              <p className="text-sm font-medium truncate">{img.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Assets Tab (replaces old Catalog)
function AssetsTab() {
  const catalogImages = [
    "https://ext.same-assets.com/2206706892/1993143932.jpeg",
    "https://ext.same-assets.com/2206706892/2095848760.jpeg",
    "https://ext.same-assets.com/2206706892/2840946787.jpeg",
    "https://ext.same-assets.com/2206706892/3497204393.jpeg",
    "https://ext.same-assets.com/2206706892/1753995726.jpeg",
    "https://ext.same-assets.com/2206706892/1882702108.jpeg",
  ]
  
  const assets = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: ["Blue Blouse", "Pink Bag", "Red Skirt", "Summer Dress", "Casual Top", "Denim Jacket", "Floral Dress", "White Tee", "Blazer", "Slim Jeans", "Cardigan", "Maxi Dress"][i],
    category: ["Tops", "Accessories", "Bottoms", "Dresses", "Tops", "Outerwear", "Dresses", "Tops", "Outerwear", "Bottoms", "Tops", "Dresses"][i],
    type: ["Original", "Generated", "Original", "Generated", "Original", "Generated", "Original", "Generated", "Original", "Generated", "Original", "Generated"][i],
    image: catalogImages[i % catalogImages.length],
  }))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif">Asset Library</h1>
          <p className="text-gray-500">All your product images and generated content</p>
        </div>
        <Button className="gap-2 rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white">
          <Upload className="w-4 h-4" /> Upload Assets
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input placeholder="Search assets..." className="pl-9 rounded-xl bg-white border-gray-200" />
        </div>
        <Button variant="outline" className="rounded-full border-gray-200">All Types</Button>
        <Button variant="outline" className="rounded-full border-gray-200">Categories</Button>
        <Button variant="outline" className="rounded-full border-gray-200">Date</Button>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {assets.map((asset) => (
          <div key={asset.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-colors">
            <div className="aspect-square bg-gray-100 relative overflow-hidden">
              <img src={asset.image} alt={asset.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Button size="icon" className="rounded-full bg-white text-gray-900 hover:bg-gray-100"><Eye className="w-4 h-4" /></Button>
                <Button size="icon" className="rounded-full bg-white text-gray-900 hover:bg-gray-100"><Download className="w-4 h-4" /></Button>
                <Button size="icon" className="rounded-full bg-white text-gray-900 hover:bg-gray-100"><Trash2 className="w-4 h-4" /></Button>
              </div>
              <span className={`absolute top-3 right-3 text-xs px-2 py-1 rounded-full font-medium ${
                asset.type === 'Generated' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
              }`}>
                {asset.type}
              </span>
            </div>
            <div className="p-4">
              <p className="font-medium truncate">{asset.name}</p>
              <span className="text-sm text-gray-400">{asset.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Brand Kit Tab
function BrandKitTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif">Brand Kit</h1>
          <p className="text-gray-500">Maintain consistency across all your product visuals</p>
        </div>
        <Button className="gap-2 rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white">
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="font-semibold mb-4">Brand Colors</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Primary Color</label>
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl cursor-pointer hover:ring-2 ring-offset-2 ring-gray-300 transition-all" />
                <Input defaultValue="#1a1a1a" className="flex-1 rounded-xl border-gray-200" />
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Secondary Color</label>
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-gray-500 rounded-xl cursor-pointer hover:ring-2 ring-offset-2 ring-gray-300 transition-all" />
                <Input defaultValue="#6b7280" className="flex-1 rounded-xl border-gray-200" />
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Accent Color</label>
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-blue-500 rounded-xl cursor-pointer hover:ring-2 ring-offset-2 ring-gray-300 transition-all" />
                <Input defaultValue="#3b82f6" className="flex-1 rounded-xl border-gray-200" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="font-semibold mb-4">Brand Logo</h3>
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-gray-300 transition-colors cursor-pointer">
            <Upload className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="font-medium mb-1">Upload your logo</p>
            <p className="text-sm text-gray-400">SVG, PNG recommended</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="font-semibold mb-4">Photography Style</h3>
          <div className="space-y-3">
            {["Clean & Minimal", "Lifestyle", "Editorial", "Custom"].map((style, i) => (
              <div 
                key={style}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  i === 0 ? 'border-[#1a1a1a] bg-gray-50' : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                <p className="font-medium">{style}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="font-semibold mb-4">Export Presets</h3>
          <div className="space-y-3">
            {[
              { name: "Shopify", size: "2048x2048", format: "PNG" },
              { name: "Amazon", size: "1500x1500", format: "JPEG" },
              { name: "Instagram", size: "1080x1080", format: "JPEG" },
              { name: "Website", size: "1200x1600", format: "WebP" },
            ].map((preset) => (
              <div key={preset.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-medium">{preset.name}</p>
                  <p className="text-xs text-gray-400">{preset.size} • {preset.format}</p>
                </div>
                <Button variant="ghost" size="sm" className="rounded-lg">Edit</Button>
              </div>
            ))}
          </div>
        </div>
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
