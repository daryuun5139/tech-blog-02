<!-- レスポンシブデザイン -->
<body>
  <div className="w-[550px] sm:container lg:w-[950px]">
    <Header_1 w-full lg:w-[90%]/>
      <Header_2 w-full md:w-[90%]/>
        <main className="flex justify-center">
          <div className="w-[90%] lg:w-[64%]">
            {children}
          </div>
          <SideBar className="hidden lg:w-[34%]"/>
        </main>
          <Footer />
        </div>
      </body>