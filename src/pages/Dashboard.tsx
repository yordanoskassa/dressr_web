import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Home,
  Sparkles,
  Image,
  Code2,
  Settings,
  BarChart3,
  Upload,
  Play,
  Copy,
  Eye,
  RefreshCw,
  Download,
  Trash2,
  Plus,
  Search,
  Bell,
  ChevronDown,
  Key,
  FileCode,
  Webhook,
  Activity,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  LogOut,
  User,
  CreditCard,
  HelpCircle,
  MoreVertical,
  Shirt,
  Layers,
  Wand2,
  Sliders,
  ZoomIn,
  RotateCcw,
  Save,
} from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext"

// Sidebar Navigation
const sidebarItems = [
  { icon: Home, label: "Overview", id: "overview" },
  { icon: Sparkles, label: "Studio", id: "studio" },
  { icon: Image, label: "Catalog", id: "catalog" },
  { icon: BarChart3, label: "Analytics", id: "analytics" },
  { icon: Code2, label: "API", id: "api" },
  { icon: Settings, label: "Settings", id: "settings" },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedGarment, setSelectedGarment] = useState<number | null>(null)
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
              <span className="text-white font-bold text-sm">d</span>
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
                  ? "bg-[#1a1a1a] text-white shadow-lg" 
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
              <DropdownMenuContent align="end" className="w-64 shadow-xl rounded-xl border-gray-200 p-2 bg-white">
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
          {activeTab === "overview" && <OverviewTab />}
          {activeTab === "studio" && <StudioTab selectedGarment={selectedGarment} setSelectedGarment={setSelectedGarment} />}
          {activeTab === "catalog" && <CatalogTab />}
          {activeTab === "analytics" && <AnalyticsTab />}
          {activeTab === "api" && <APITab />}
          {activeTab === "settings" && <SettingsTab />}
        </div>
      </main>
    </div>
  )
}

// Overview Tab
function OverviewTab() {
  const stats = [
    { label: "Total Try-Ons", value: "32,450", change: "+12.5%", trend: "up" },
    { label: "Conversion Rate", value: "24.8%", change: "+3.2%", trend: "up" },
    { label: "Active Users", value: "1,284", change: "+8.1%", trend: "up" },
    { label: "Avg. Session", value: "4m 32s", change: "-0.8%", trend: "down" },
  ]

  const recentActivity = [
    { type: "success", message: "Try-on completed for SKU #12345", time: "2 min ago" },
    { type: "success", message: "New garment uploaded: Summer Dress", time: "15 min ago" },
    { type: "warning", message: "API rate limit at 80%", time: "1 hour ago" },
    { type: "success", message: "Batch processing completed (45 items)", time: "2 hours ago" },
    { type: "error", message: "Failed try-on: Invalid image format", time: "3 hours ago" },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif">Welcome back, John</h1>
        <p className="text-gray-500 mt-1">Here's what's happening with your virtual try-on platform.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-5">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-semibold">{stat.value}</span>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${stat.trend === 'up' ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Chart Placeholder */}
        <div className="col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Try-On Activity</h3>
            <p className="text-sm text-gray-500">Daily try-ons over the last 30 days</p>
          </div>
          <div className="h-64 bg-gray-50 rounded-xl flex items-end justify-around p-4 gap-1">
            {Array.from({ length: 30 }).map((_, i) => (
              <div 
                key={i} 
                className="bg-[#1a1a1a] rounded-t w-full hover:bg-[#2a2a2a] transition-colors cursor-pointer"
                style={{ height: `${Math.random() * 80 + 20}%` }}
              />
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors">
                {activity.type === 'success' && <div className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0"><CheckCircle2 className="w-4 h-4 text-green-500" /></div>}
                {activity.type === 'warning' && <div className="w-7 h-7 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0"><AlertCircle className="w-4 h-4 text-yellow-500" /></div>}
                {activity.type === 'error' && <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0"><XCircle className="w-4 h-4 text-red-500" /></div>}
                <div className="flex-1 min-w-0">
                  <p className="text-sm truncate">{activity.message}</p>
                  <p className="text-xs text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="flex gap-3">
          <Button className="gap-2 rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white"><Upload className="w-4 h-4" /> Upload Garments</Button>
          <Button variant="outline" className="gap-2 rounded-full border-gray-200 hover:bg-gray-50"><Play className="w-4 h-4" /> Test Try-On</Button>
          <Button variant="outline" className="gap-2 rounded-full border-gray-200 hover:bg-gray-50"><Code2 className="w-4 h-4" /> View API Docs</Button>
          <Button variant="outline" className="gap-2 rounded-full border-gray-200 hover:bg-gray-50"><BarChart3 className="w-4 h-4" /> Export Report</Button>
        </div>
      </div>
    </div>
  )
}

// Studio Tab - Comprehensive Try-On Studio
function StudioTab({ selectedGarment, setSelectedGarment }: { selectedGarment: number | null, setSelectedGarment: (id: number | null) => void }) {
  const [modelImage, setModelImage] = useState<{ file: File; preview: string } | null>(null)
  const [garmentImage, setGarmentImage] = useState<{ file: File; preview: string } | null>(null)
  const [processing, setProcessing] = useState(false)
  const [result, setResult] = useState<{ data: string; mime_type: string; url?: string } | null>(null)
  const [error, setError] = useState<string | null>(null)

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

      const response = await fetch('/api/try-on/', {
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
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
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
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
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
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
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
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full flex flex-col">
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
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
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

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
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
          <div key={garment.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="aspect-square bg-gray-100 relative overflow-hidden">
              <img src={garment.image} alt={garment.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Button size="icon" className="rounded-full bg-white text-gray-900 hover:bg-gray-100"><Eye className="w-4 h-4" /></Button>
                <Button size="icon" className="rounded-full bg-white text-gray-900 hover:bg-gray-100"><Play className="w-4 h-4" /></Button>
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

// Analytics Tab
function AnalyticsTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif">Analytics</h1>
          <p className="text-gray-500">Track your virtual try-on performance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-full border-gray-200">Last 7 days</Button>
          <Button variant="outline" className="gap-2 rounded-full border-gray-200"><Download className="w-4 h-4" /> Export</Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {[
          { label: "Total Try-Ons", value: "32,450", change: "+12.5%" },
          { label: "Unique Users", value: "8,234", change: "+8.3%" },
          { label: "Conversion Rate", value: "24.8%", change: "+3.2%" },
          { label: "Avg. Processing", value: "1.2s", change: "-15%" },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">{stat.label}</p>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-semibold">{stat.value}</span>
              <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Try-On Trends</h3>
          <div className="h-64 bg-gray-50 rounded-xl flex items-end justify-around p-4 gap-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <div 
                key={i} 
                className="bg-[#1a1a1a] rounded-t w-full hover:bg-[#2a2a2a] transition-colors cursor-pointer"
                style={{ height: `${Math.random() * 80 + 20}%` }}
              />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Top Garments</h3>
          <div className="space-y-4">
            {[
              { name: "Summer Dress", tryOns: 4521, percentage: 85 },
              { name: "Classic White Tee", tryOns: 3892, percentage: 72 },
              { name: "Denim Jacket", tryOns: 3245, percentage: 65 },
              { name: "Slim Fit Jeans", tryOns: 2890, percentage: 58 },
              { name: "Blazer", tryOns: 2456, percentage: 48 },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>{item.name}</span>
                  <span className="text-gray-400">{item.tryOns.toLocaleString()}</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#1a1a1a] rounded-full" style={{ width: `${item.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// API Tab
function APITab() {
  const [showKey, setShowKey] = useState(false)
  const apiKey = "sk_live_dressr_a1b2c3d4e5f6g7h8i9j0"

  const endpoints = [
    { method: "POST", path: "/v1/try-on", desc: "Generate a virtual try-on" },
    { method: "GET", path: "/v1/garments", desc: "List all garments" },
    { method: "POST", path: "/v1/garments", desc: "Upload a new garment" },
    { method: "GET", path: "/v1/garments/:id", desc: "Get garment details" },
    { method: "DELETE", path: "/v1/garments/:id", desc: "Delete a garment" },
    { method: "GET", path: "/v1/usage", desc: "Get API usage stats" },
  ]

  const logs = [
    { status: 200, method: "POST", path: "/v1/try-on", time: "245ms", timestamp: "2 min ago" },
    { status: 200, method: "GET", path: "/v1/garments", time: "89ms", timestamp: "5 min ago" },
    { status: 201, method: "POST", path: "/v1/garments", time: "1.2s", timestamp: "12 min ago" },
    { status: 400, method: "POST", path: "/v1/try-on", time: "45ms", timestamp: "15 min ago" },
    { status: 200, method: "GET", path: "/v1/usage", time: "67ms", timestamp: "20 min ago" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif">API</h1>
          <p className="text-gray-500">Manage your API keys and view documentation</p>
        </div>
        <Button variant="outline" className="gap-2 rounded-full border-gray-200">
          <FileCode className="w-4 h-4" /> View Full Docs
        </Button>
      </div>

      <Tabs defaultValue="keys">
        <TabsList>
          <TabsTrigger value="keys" className="gap-2"><Key className="w-4 h-4" /> API Keys</TabsTrigger>
          <TabsTrigger value="endpoints" className="gap-2"><Code2 className="w-4 h-4" /> Endpoints</TabsTrigger>
          <TabsTrigger value="webhooks" className="gap-2"><Webhook className="w-4 h-4" /> Webhooks</TabsTrigger>
          <TabsTrigger value="logs" className="gap-2"><Activity className="w-4 h-4" /> Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="keys" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Production API Key</CardTitle>
              <CardDescription>Use this key for production requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-muted rounded-lg px-4 py-3 font-mono text-sm">
                  {showKey ? apiKey : "sk_live_dressr_••••••••••••••••"}
                </div>
                <Button variant="outline" size="icon" onClick={() => setShowKey(!showKey)}>
                  <Eye className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Copy className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <RefreshCw className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Test API Key</CardTitle>
              <CardDescription>Use this key for development and testing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-muted rounded-lg px-4 py-3 font-mono text-sm">
                  sk_test_dressr_••••••••••••••••
                </div>
                <Button variant="outline" size="icon"><Eye className="w-4 h-4" /></Button>
                <Button variant="outline" size="icon"><Copy className="w-4 h-4" /></Button>
                <Button variant="outline" size="icon"><RefreshCw className="w-4 h-4" /></Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Usage This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">API Calls</span>
                    <span className="text-sm font-medium">32,450 / 50,000</span>
                  </div>
                  <Progress value={65} />
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-2xl font-bold">32,450</p>
                    <p className="text-sm text-muted-foreground">Total Requests</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-2xl font-bold">245ms</p>
                    <p className="text-sm text-muted-foreground">Avg. Latency</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-2xl font-bold">99.9%</p>
                    <p className="text-sm text-muted-foreground">Uptime</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="endpoints" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Available Endpoints</CardTitle>
              <CardDescription>Base URL: https://api.dressr.io</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {endpoints.map((endpoint, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                    <Badge variant={endpoint.method === 'GET' ? 'secondary' : endpoint.method === 'POST' ? 'default' : 'destructive'} className="w-16 justify-center">
                      {endpoint.method}
                    </Badge>
                    <code className="text-sm font-mono flex-1">{endpoint.path}</code>
                    <span className="text-sm text-muted-foreground">{endpoint.desc}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="webhooks" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Webhooks</CardTitle>
                <CardDescription>Receive real-time notifications for events</CardDescription>
              </div>
              <Button className="gap-2"><Plus className="w-4 h-4" /> Add Webhook</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <div>
                      <p className="font-medium">https://myapp.com/webhooks/dressr</p>
                      <p className="text-sm text-muted-foreground">try-on.completed, garment.uploaded</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon"><MoreVertical className="w-4 h-4" /></Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent API Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {logs.map((log, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                    <Badge variant={log.status < 300 ? 'default' : 'destructive'}>{log.status}</Badge>
                    <Badge variant="outline">{log.method}</Badge>
                    <code className="text-sm font-mono flex-1">{log.path}</code>
                    <span className="text-sm text-muted-foreground">{log.time}</span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {log.timestamp}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
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
          <TabsTrigger value="general" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">General</TabsTrigger>
          <TabsTrigger value="team" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Team</TabsTrigger>
          <TabsTrigger value="billing" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Billing</TabsTrigger>
          <TabsTrigger value="notifications" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-6 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
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

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
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
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
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
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
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
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
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
