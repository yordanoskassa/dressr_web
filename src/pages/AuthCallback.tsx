import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { api } from '@/lib/api'

export default function AuthCallback() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const token = searchParams.get('token')
    const userData = searchParams.get('user')
    
    if (token) {
      api.setToken(token)
      
      // Parse and store user data
      if (userData) {
        const [name, email, picture] = decodeURIComponent(userData).split('|')
        localStorage.setItem('user', JSON.stringify({ name, email, picture }))
      }
      
      navigate('/dashboard')
    } else {
      // Handle error or redirect to login
      navigate('/login')
    }
  }, [searchParams, navigate])

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-[#1a1a1a] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-500">Completing sign in...</p>
      </div>
    </div>
  )
}
