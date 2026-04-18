

import React from 'react'
import { FaFacebookF, FaInstagram , FaTwitter, FaYoutube } from 'react-icons/fa'
import { FiTruck, FiPhone, FiRefreshCcw, FiShield, FiMapPin, FiMail } from "react-icons/fi"
import { BsCartFill } from "react-icons/bs"
import Link from "next/link"

export default function Footer() {
  return (
    <div className="bg-[#0f172a] text-gray-400">

      {/* Top Bar */}
      <div className="bg-green-500 text-white text-sm">
        <div className="w-10/12 mx-auto py-3 flex flex-wrap justify-between gap-4">
          <span className="flex items-center gap-2"><FiTruck /> Free shipping on orders over $50</span>
          <span className="flex items-center gap-2"><FiShield /> Secure payment</span>
          <span className="flex items-center gap-2"><FiPhone /> 24/7 Support</span>
          <span className="flex items-center gap-2"><FiRefreshCcw /> Easy returns within 30 days</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="w-10/12 mx-auto py-12 grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* Brand Column */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg px-4 py-2 inline-flex items-center gap-2">
            <BsCartFill color="text-green-500" size={14}/>
            <span className="text-[#0f172a] font-bold text-lg">FreshCart</span>
          </div>
          <p className="text-sm text-gray-500 mt-4 leading-relaxed max-w-sm">
            FreshCart is your one-stop destination for quality products. From fashion to electronics,
            we bring you the best brands at competitive prices with a seamless shopping experience.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <p className="flex items-center gap-2"><FiPhone size={14} /> +1 (800) 123-4567</p>
            <p className="flex items-center gap-2"><FiMail size={14} /> support@freshcart.com</p>
            <p className="flex items-center gap-2"><FiMapPin size={14} /> 123 Commerce Street, New York, NY 10001</p>
          </div>
          <div className="flex gap-3 mt-5">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
              <div key={i} className="w-9 h-9 flex items-center justify-center rounded-md bg-white/5 hover:bg-green-500 hover:text-white transition cursor-pointer">
                <Icon size={14} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white font-medium mb-4">cart</h3>
          {["All Products", "Categories", "Brands", "Electronics", "Men's Fashion", "Women's Fashion"].map(item => (
            <Link key={item} href="/cart" className="block text-sm text-gray-500 hover:text-green-500 mb-2">{item}</Link>
          ))}
        </div>

        {/* Account */}
        <div>
          <h3 className="text-white font-medium mb-4">Account</h3>
          {["My Account", "Order History", "Wishlist", "Shopping Cart", "Sign In", "Create Account"].map(item => (
            <Link key={item} href="#" className="block text-sm text-gray-500 hover:text-green-500 mb-2">{item}</Link>
          ))}
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-medium mb-4">Support</h3>
          {["Contact Us", "Help Center", "Shipping Info", "Returns & Refunds", "Track Order"].map(item => (
            <Link key={item} href="#" className="block text-sm text-gray-500 hover:text-green-500 mb-2">{item}</Link>
          ))}
          <h3 className="text-white font-medium mt-6 mb-4">Legal</h3>
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(item => (
            <Link key={item} href="#" className="block text-sm text-gray-500 hover:text-green-500 mb-2">{item}</Link>
          ))}
        </div>

      </div>

      <div className="border-t border-white/10" />

      {/* Bottom Bar */}
      <div className="w-10/12 mx-auto py-5 flex items-center justify-between flex-wrap gap-4">
        <p className="text-xs text-gray-500">© {new Date().getFullYear()} FreshCart. All rights reserved.</p>
        <div className="flex gap-3">
          {["Visa", "Mastercard", "PayPal"].map(method => (
            <span key={method} className="bg-white/5 text-xs px-3 py-1 rounded text-gray-400">{method}</span>
          ))}
        </div>
      </div>

    </div>
  )
}