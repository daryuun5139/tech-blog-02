<!-- レスポンシブデザイン -->
<body>
  <div className=" sm:container lg:w-[1000px]">
    <Header_1 w-full/>
      <Header_2 w-full md:w-[90%]/>
        <main className="flex justify-center">
          <div className="w-[90%] lg:w-[64%]">
            {children}
          </div>
          <SideBar className="hidden lg:w-[34%]"/>
        </main>
          <Footer />
        </div>
      </body># tech-blog-02
