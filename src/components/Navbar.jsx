import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">

        {/* Left Navbar */}
        <div className="flex-1">

          {/* Tombol Burger yang muncul di layar kecil */}
          <div className="lg:hidden">
            <label htmlFor="my-drawer" className="btn btn-ghost text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
              </svg>
            </label>
          </div>

          {/* Brand */}
          <a className="btn btn-ghost text-xl lg:flex lg:items-center">
            NiggaShop
          </a>

          {/* Menu untuk layar besar */}
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal px-1">

              <li>
                <details>
                  <summary>Categories</summary>
                    <ul className="bg-base-100 rounded-t-none p-2">
                      <li><a>Laptop</a></li>
                      <li><a>Camera</a></li>
                      <li><a>Tablet</a></li>
                      <li><a>Headphone</a></li>
                      <li><a>Smartwatch</a></li>
                      <li><a>Console</a></li>
                    </ul>
                </details>
              </li>
                
              <li>
                <details>
                  <summary>Shop</summary>
                    <ul className="bg-base-100 rounded-t-none p-2">
                      <li><a>Simple</a></li>
                      <li><a>Variable</a></li>
                      <li><a>Grouped</a></li>
                      <li><a>Image</a></li>
                    </ul>
                </details>
              </li>

              <li>
                <details>
                  <summary>Pages</summary>
                    <ul className="bg-base-100 rounded-t-none p-2">
                      <li><a>About</a></li>
                      <li><a>Contact</a></li>
                    </ul>
                </details>
              </li>

              <li>
                <details>
                  <summary>Blog</summary>
                    <ul className="bg-base-100 rounded-t-none p-2">
                      <li><a>Main</a></li>
                      <li><a>Column</a></li>
                      <li><a>Grid</a></li>
                      <li><a>Basic</a></li>
                    </ul>
                </details>
              </li>
            </ul>
          </div>

        </div>

        {/* Drawer untuk layar kecil */}
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side h-full">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-40 bg-base-100 min-h-screen">

            <ul>
              <b>Categories</b>
              <ul>
                <li><a>Laptop</a></li>
                <li><a>Camera</a></li>
                <li><a>Tablet</a></li>
                <li><a>Headphone</a></li>
                <li><a>Smartwatch</a></li>
                <li><a>Console</a></li>
              </ul>
            </ul>

            <ul>
              <b>Shop</b>
              <ul>
                <li><a>Simple</a></li>
                <li><a>Variable</a></li>
                <li><a>Grouped</a></li>
                <li><a>Image</a></li>
              </ul>
            </ul>
            
            <ul>
              <b>Pages</b>
              <ul>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
              </ul>
            </ul>

            <ul>
              <b>Blog</b>
              <ul>
                <li><a>Main</a></li>
                <li><a>Column</a></li>
                <li><a>Grid</a></li>
                <li><a>Basic</a></li>
              </ul>
            </ul>
          </ul>
        </div>
        {/* End Left Navbar */}


        {/* Right navbar */}
        <div className="flex-none gap-2">

        {/* Profile Button */}
        <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar">
              <a className="btn btn-ghost text-xl lg:flex lg:items-center" ><CgProfile /></a>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li><a className="justify-between">Profile<span className="badge">New</span></a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
        </div>
        {/* End Profile Button */}

          {/* Cart Button */}
          <a href="/cart" className="btn btn-ghost text-xl lg:flex lg:items-center" ><IoCartOutline /></a>

          {/* Search Product Input */}
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto rounded-none"
            />
          </div>
          {/* End Search Product Input */}

        </div>

        {/* End Right Navbar */}

      </div>
    </div>
  );
};

export default Navbar;
