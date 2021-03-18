var tipuesearch = {"pages": [{'title': 'About', 'text': '專題題目: \n 有限元素分析套件之應用研究 - 以 Abaqus, Range3 與 NGSolve 為例 \n Application study on finite element packages - taking Abaqus, Range3 and NGSolve as examples \n 討論區:  https://github.com/mdecourse/4072pj2/discussions \n 組員: \n 40723212 \n 40723216 \n 40723223\xa0\xa0 \n 40723246 \n \n table_of_greek_letters.pdf \n Mathmatical Symbols:  https://en.wikipedia.org/wiki/Table_of_mathematical_symbols_by_introduction_date \n <<<<<<< HEAD \n \n ======= >>>>>>> fea3bf9966f4d0c6f92d894d4989f64844943109 \n', 'tags': '', 'url': 'About.html'}, {'title': 'About FEM', 'text': "有限元素分析，即使用有限元素法（英文：finite element method）分析物理現象，是一種用於求解微分方程組或積分方程組數值解的數值方法，它能運用在各種工程上的問題，像結構分析，熱傳遞，流體流動，質量傳輸和電磁勢的傳統領域。 \n 偏微分方程式:f(x) = \\int_{0}^{x} f'(t)dt \n 在解偏微分方程的過程中，主要難點是如何構造一個方程來接近原本研究的方程，並且該過程還需要保持數值穩定性。目前有許多處理的方法，他們各有好壞。當區域改變時（就像一個邊界可變的固體），當需要的精確度在整個區域上變化，或者當解缺少光滑性時，有限元素方法是在複雜區域上解偏微分方程的一個很好的選擇。 為了解決問題，有限元素法將大型物理系統細分為更小、更簡單的部分，稱為有限元（英文：finite element）。這是通過在空間維度上進行特定的空間離散化來實現，離散化是通過構建對象的網格實現的：解決方案的數值域具有有限數量的點。邊值問題的有限元素法公式化最終形成了一個代數方程組。該方法在域上近似未知函數。然後，將對這些有限元建模的簡單方程式組合成一個對整個問題進行建模的較大方程式系統。然後，有限元素法通過最小化關聯的誤差函數，使用來自變異演算的變異方法來近似求解。 \n 優點： ﹙1﹚鄰近元素的材料性質不一定要相同。如此，能使這種疾法應用到由不同材料所組成的物體。 ﹙2﹚不規則形狀的邊界，能用直邊的元素作近似估計，或用曲線邊界作正確配合。 ﹙3﹚元素的大小可以改變。這種性質能視要，將元素格了擴大或縮小。﹙4﹚邊界條件，諸如不連續性的面負荷，用這種鞋法不會產生任何困鄞。能很容易解決混合邊界條件。 缺點： ﹙1﹚有限元素法的解法非常的龐雜，即使是一個小問題若用人工來計算仍是相當的複雜，所以相當需要電腦的輔助運作， \n 工作流程包括 （1）將問題的域劃分為子域的集合，每個子域由一組元素方程表示為原始問題，然後（2）系統地將所有元素方程組重組為用於最終計算的全域方程組。 在上面的第一步中，元素方程是簡化過的方程，可以局部地近似要研究的原始復雜方程組，其中原始方程通常是偏微分方程。為了求此方程式的近似解，通常將有限元素法作為伽遼金法的特例來處理。用數學語言來說，該過程是將殘差和加權函數取內積，並將該積分設為零。簡單來說，它是通過將試驗函數擬合到偏微分方程中來最小化近似誤差的過程。殘差是由試驗函數引起的誤差，權重函數是投影殘差的多項式逼近函數。該過程消除了偏微分方程中的所有空間導數，從而使偏微分方程局部近似為一組穩態問題的代數方程，或是一組用於瞬態問題的常微分方程。如果基礎偏微分方程是線性的，則元素方程也是線性的，反之亦然。穩態問題中出現的代數方程組，便利用數值線性代數方法求解，而瞬態問題中出現的常微分方程組則使用其他數值方法（例如歐拉方法或Runge-Kutta法）通過數值積分來求解。 \n 歷史 有限元法最初起源於土木工程和航空工程中的彈性和結構分析問題的研究。它的發展可以追溯到Alexander Hrennikoff（1941）和Richard Courant (1942)的工作。他們使用的方法有很大的差異，但是他們具有共同的部分：利用網格離散化將一個連續區域轉化為一族離散的子區域，通常叫做元.Hrennikoff的工作離散用類似于格子的網格離散區域; Courant的方法將區域分解為有限個三角形的子區域，用於求解來源於圓柱體轉矩問題的二階橢圓偏微分方程. Courant的貢獻推動了有限元的發展，繪製了早期偏微分方程的研究結果。 \n 有限元素方法的發展開始於五十年代中後期使用在機身框架和結構分析上，並於六十年代通過斯圖加特大學的John Argyris和柏克萊加州大學的Ray W. Clough在土木工程中的應用工作中積累經驗。 基於五十年代至六十年代大型水壩計算研究的實踐經驗，1965年，中國計算數學專家馮康發表了《基於變分原理的差分格式》一文，奠定了有限元計算方法的嚴格數學理論，為後世有限元計算方法的實際應用提供了理論保證。  (https://zh.wikipedia.org/wiki/%E6%9C%89%E9%99%90%E5%85%83%E5%88%86%E6%9E%90 \n", 'tags': '', 'url': 'About FEM.html'}, {'title': '參考資料', 'text': '\n https://github.com/Range-Software/range3 \n https://dart.dev/articles/archive/numeric-computation \n https://pub.dev/packages/extended_math \n https://itnext.io/building-a-calculator-app-in-flutter-824254704fe6 \n https://github.com/mdecourse/flutter_demo_3d \n https://github.com/mdecourse/flutter_cube \n https://github.com/mdecourse/Flutter-OBJ-3D-Viewer \n https://mechanicalc.com/reference/finite-element-analysis \n https://github.com/liebeskind/feap \n https://github.com/mikolalysenko/femgl \n https://konstrct.com/index.html \n \n', 'tags': '', 'url': '參考資料.html'}, {'title': '動態網站', 'text': '設定步驟請參考: \n https://github.com/mdecourse/project2020-1/issues/4 \n CMSiMDE 執行所需模組 \n sudo pip3 install flask flask_cors bs4 lxml \n uwsgi 所需模組 \n sudo apt install uwsgi uwsgi-plugin-python3 \n sudo pip3 install uwsgi \n /etc/nginx/sites-available/default 附加 server 設定  \n server {\n \n    listen 9443 ssl;\n    listen [::]:9443 ssl;\n \n    # 指定 static 所在位置\n    location /static {\n\talias /home/yen/cad1_site/cmsimde/static/;\n    }\n \n    location / {\n\t# 導入 uwsgi_params 設定參數\n\tinclude uwsgi_params;\n\t# 根目錄設為近端的 8080 port \n\tuwsgi_pass  127.0.0.1:8080;\n    }\n \n    ssl_certificate /home/yen/localhost.crt;\n    ssl_certificate_key /home/yen/localhost.key;\n    #ssl_certificate /etc/letsencrypt/live/cad1.kmol.info/fullchain.pem;\n    #ssl_certificate_key /etc/letsencrypt/live/cad1.kmol.info/privkey.pem;\n    ssl_session_timeout 5m;\n    ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;\n    ssl_ciphers "HIGH:!aNULL:!MD5 or HIGH:!aNULL:!MD5:!3DES";\n    ssl_prefer_server_ciphers on;\n    try_files $uri $uri/ =404;\n} \n 建立 self-signed key sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout localhost.key -out localhost.crt /home/yen/uwsgi_ini/uwsgi.ini \n [uwsgi]\nsocket = :8080\nuid = yen\ngid = yen\nplugins-dir = /usr/lib/uwsgi/plugins/\nplugin = python3\nmaster = true\nprocess = 4\nthreads = 2\nchdir = /home/yen/cad1_site/cmsimde\nwsgi-file = /home/yen/cad1_site/cmsimde/wsgi.py \n uwsgi emperor 手動測試 \n /usr/bin/uwsgi --emperor /home/yen/uwsgi_ini 防火牆設定 \n 先暫時關閉 ufw \n ufw disable \n 允許設計系 IP v6 網段連線 9443 port \n ufw allow from 2001:288:6004:17::/32 to any port 9443 \n 其他網段主機一律]不准連線 \n ufw deny 9443 \n 重新開啟 ufw 防火牆 \n ufw enable \n /etc/systemd/system 目錄中建立 cmsimde.service 檔案 \n \n [Unit]\nDescription=uWSGI to serve CMSiMDE \nAfter=network.target\n \n[Service]\nUser=yen\nGroup=yen\nWorkingDirectory=/home/yen/uwsgi_ini\nExecStart=/usr/bin/uwsgi --emperor /home/yen/uwsgi_ini\n \n[Install]\nWantedBy=multi-user.target \n \n 接著將 cmsimde 服務設為隨系統開機啟動: \n sudo systemctl enable cmsimde\n \n 若要取消 cmsimde 服務隨系統開機啟動: \n sudo systemctl disable cmsimde\n \n 手動啟動 cmsimde.service 服務 \n sudo systemctl start cmsimde\n \n 手動停止 cmsimde.service 服務 \n sudo systemctl stop cmsimde \n \n', 'tags': '', 'url': '動態網站.html'}, {'title': '數位簽章', 'text': 'https://letsencrypt.org/ \n https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx \xa0 \n sudo apt-get update\nsudo apt-get install software-properties-common\nsudo add-apt-repository universe\nsudo apt-get update\n\nsudo apt-get install certbot python3-certbot-nginx\n\nsudo certbot certonly --nginx\n\nsudo certbot renew --dry-run \n \n', 'tags': '', 'url': '數位簽章.html'}, {'title': 'test_latex', 'text': '$$\\frac{1}{x^2-1}$$ \n \xa0\\frac{\\partial^2}{\\partial x_1\\partial x_2}y\xa0 \n \n', 'tags': '', 'url': 'test_latex.html'}, {'title': '專題流程', 'text': '討論區:  https://github.com/mdecourse/4072pj2/discussions \n Finite Element Analysis (有限元素分析) 是一種 數值分析方法 可用來 解系統的微分方程式 , 主要是利用 數學近似 的方法模擬 真實物理系統在各種受力或環境邊界條件下的反應情形 . 方法架構是利用 簡單且相互作用的元素單元 互相結合運算下, 就可以利用 有限數量 的未知量逼近 無限 未知量的真實系統. \n Finite Element Method \n 解微分方程式的其他常見方法: \n finite difference method \n boundary element method \n finite volume method \n \n', 'tags': '', 'url': '專題流程.html'}, {'title': '1DFEM', 'text': '先從了解 1D boundary value differential equation 的數值分析解法開始 \n 參考書: \n https://link.springer.com/book/10.1007/978-3-642-33287-6\xa0 \n https://hplgit.github.io/fem-book/doc/pub/book/pdf/fem-book-4print.pdf\xa0 \n 程式碼: \n https://people.sc.fsu.edu/~jburkardt/py_src/fem1d/fem1d.html\xa0 \n 1d_fem_linear_c_py_ex.7z \n FEM1D , a Python program which applies the finite element method (FEM) to a 1D linear two point boundary value problem (BVP), using piecewise linear basis functions. \n The BVP to be solved is: \n         -u\'\' = x * ( x + 3 ) * exp ( x )  over the interval 0 < x < 1\n        u(0) = 0.0\n        u(1) = 0.0 \n The exact solution is: \n         u(x) = x * ( 1 - x ) * exp ( x ) \n A version of the finite element method is used. Six equally spaced nodes are defined, from 0.0 to 1.0, dividing the interval into 5 elements. At node I, we associate a "hat" function, or piecewise linear basis function, PSI(I)(X), which has the value 1 at that node, is 0 at all other nodes. \n We look for an approximate solution to our problem of the form \n         UH(X) = sum ( 1 <= I <= 6 ) C(I) * PSI(I,X) \n so that now the problem becomes the determination of the unknown coefficients C. \n We take the original BVP, multiply by test function PSI(J,X), integrate over the region, and apply integration by parts, to obtain a linear system of the form \n         A * C = F \n We modify the first and last rows of the linear system to enforce the boundary conditions, then solve to determine the values of C. \n Licensing: \n The computer code and data files described and made available on this web page are distributed under \xa0 the GNU LGPL license. \n Languages: \n FEM1D \xa0 is available in \xa0 a C version \xa0 and \xa0 a C++ version \xa0 and \xa0 a FORTRAN90 version \xa0 and \xa0 a MATLAB version \xa0 and \xa0 a Python version. \n Related Data and Programs: \n FEM1D_BVP_LINEAR , a Python program which applies the finite element method (FEM), with piecewise linear elements, to a two point boundary value problem (BVP) in one spatial dimension, and compares the computed and exact solutions with the L2 and seminorm errors. \n FD1D_HEAT_EXPLICIT , a Python library which uses the finite difference method (FDM) and explicit time stepping to solve the time dependent heat equation in 1D. \n FEM1D , a data directory which contains examples of 1D FEM files, three text files that describe a 1D finite element model; \n FEM1D_BVP_QUADRATIC , a Python program which applies the finite element method (FEM), with piecewise quadratic elements, to a two point boundary value problem (BVP) in one spatial dimension. \n FEM1D_CLASSES , a Python library which defines classes useful for solving a boundary value problem (BVP) of the form u\'\'+2u\'+u=f in 1 spatial dimension, using the finite element method (FEM), by Mike Sussman. \n Reference: \n \n \n Gilbert Strang, George Fix, An Analysis of the Finite Element Method, Cambridge, 1973, ISBN: 096140888X, LC: TA335.S77. \n \n \n Source Code: \n \n \n fem1d.py , the source code. \n fem1d.sh , commands to compile the source code. \n fem1d.txt , the output file. \n \n \n \n \n fem1d.png , a plot comparing the computed and exact solutions. \n \n', 'tags': '', 'url': '1DFEM.html'}, {'title': 'Matlab', 'text': 'http://www.spacar.nl/wiki/doku.php?id=start \n spacar_man2009.pdf \n protmodslides2015.pdf \n protmod2014.pdf \n \n https://github.com/lyc102/ifem \n https://www.math.uci.edu/~chenlong/programming.html \n \n https://github.com/JWock82/PyNite \n https://www.eng-tips.com/viewthread.cfm?qid=474433 \n', 'tags': '', 'url': 'Matlab.html'}, {'title': 'abaqus', 'text': '利用  https://www.standoutvitae.com/article/gautampuri0161663/abaqus-basics/  中的範例分別在 Abaqus, Range3, Ansys, Comsol, NGSolve 中進行分析比較其結果. \n 列出有限元素分析法的分析原理並利用上述範例延伸至摺疊椅的強度分析. \n 27011_37 \n https://www.standoutvitae.com/article/gautampuri050534/abaqus-fea-tutorial-series/ \n http://130.149.89.49:2080/v6.14/pdf_books/index.pdf \n The Secondary Development of ABAQUS by using Pythonand the Application of the Advanced GA.pdf \n ABAQUS_python_tutorial.pdf \n Abaqus_SCRIPT_USER.pdf \n learnabaqusscriptinonehour.pdf \n Python Scripts for Abaqus.pdf \n abaqus_scripting-summary.pdf \n lsight_tip1805_102.pdf \n Finite ElementModelingwith Abaqusand Pythonfor Thermal andStress Analysis.pdf \n A Pragmatic Introduction to theFinite Element Methodfor Thermal and Stress Analysis.pdf \n http://hogwarts.ucsd.edu/~pkrysl/faesor/#downloads \n DimensionalModelReductioninNon-linearFiniteElementDynamicsofSolidsandStructures.pdf \n 軌道絕緣接頭之應力數值分析.pdf \n Abaqus 6.14 EXAMPLES_1.pdf \n Abaqus 6.14 EXAMPLES_2.pdf \n', 'tags': '', 'url': 'abaqus.html'}, {'title': 'FEM 應用', 'text': 'fem_ref.7z \n \n \n', 'tags': '', 'url': 'FEM 應用.html'}, {'title': '專利搜尋', 'text': 'https://github.com/daneads/pypatent \xa0 \n https://github.com/wenyalintw/Google-Patents-Scraper \xa0 \n https://github.com/helmersl/patent_similarity_search \xa0 \n https://github.com/ryanlstevens/google_patent_scraper \xa0 \n https://commercedataservice.github.io/tutorial_pto/ \xa0 \n https://en.wikipedia.org/wiki/User:Jrincayc/Patent_utils \xa0 \n http://www.ipstreet.com/ \xa0 \n', 'tags': '', 'url': '專利搜尋.html'}, {'title': '參數式 CAD', 'text': 'Solvesapce: 自行編譯, 可修改功能, Pyslvs-UI 應用核心 \n Onshape: 雲端系統 \n NX12: 高端參數 CAD \n Solidworks 2017: 最普遍使用參數 CAE \n', 'tags': '', 'url': '參數式 CAD.html'}, {'title': 'Solvespace', 'text': '可以直接從\xa0 https://github.com/Symbian9/SolveSpace-Daily-Engineering/blob/master/README.md#solvespace-3x-slvs  下載, 或自行編譯. \n \n \n 編譯 Solvespace 的步驟, 需要先下載能夠 編譯 C++17 原始碼的可攜系統 \n \n \n 接著啟動可攜系統後, 以 \n \n \n git clone --recurse-submodules \xa0 https://github.com/solvespace/solvespace.git \n 取下最新的程式碼, 以及子模組中的所有原始碼. \n \n \n 接著要確定 portablegit\\bin\\ 與 Y:\\msys64\\usr\\bin\\ 目錄中的 sh.exe 都改名為 sh_rename_for_compiling_solvespace.exe \n \n \n 由於上述可攜系統已經安裝 Msys2 與 CMAKE, 因此只需要在命令列中進入 solvespace 原始碼目錄, 以 mkdir 建立 build 目錄, 然後 cd build 後, 執行: \n \n \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release \n 以便建立所需的 Makefile \n \n 然後再利用 \n \n make \n 完成所有程式碼的編譯. \n \n 最後 solvespace.exe 已經位於 solvespace/build/bin 目錄中, 只要再從 Y:\\msys64\\mingw64\\bin\\libwinpthread-1.dll 複製 dll 檔案放入 bin 目錄, 就可以啟動 solvespace.exe 進行參數零件, 轉出 stl 檔案 (為 binary stl 格式) 後, 就可以導入 Range3 進行後續的 CAE 分析. \n \n from https://drive.google.com/file/d/1AaOdJdZPNiD3YE5kgNcIrLK7ic0qsme1/view?usp=sharing get wcm2020_project \n about cmake: \xa0 https://cmake.org/ \n about msys2: \xa0 https://www.msys2.org/ \n about solvespace: \xa0 https://github.com/solvespace/solvespace \n install cmake \n pacman -S mingw-w64-x86_64-cmake\n \n rename Y:\\msys64\\usr\\bin\\sh.exe to sh_renamed_for_compiling_solvespace.exe \n build solvespace.exe \n use mingw64.exe \n cd /y/tmp/cad_ex\n\ncd solvespace\nmkdir build\ncd build\ncmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release\nmake\n \n need Y:\\msys64\\mingw64\\bin\\libwinpthread-1.dll to execute solvespace.exe \n \n 根據上述步驟完成的編譯專案檔案位於: \n project2020-2_compile_solvespace.7z \n', 'tags': '', 'url': 'Solvespace.html'}, {'title': 'FEM\xa0theory', 'text': '下載專門用於 Range3 與 NGSolve 的可攜套件  (使用 Python 3.7.9) \n \n Introduction to NumericalMethods for VariationalProblems.pdf \n PracticeProblemsforFiniteElementMethod.pdf \n FEA Theory.pdf \n Intro to FEM.pdf \n Finite element procedures.pdf  ( source ) \n Solution Manual.pdf  ( source ) \n Examples solving an ODE using finite elements method. Mathematica and Matlabimplementation and animation.pdf \n weighted residual methods.pdf \n 加權殘值法(Weighted Residual Methods), 是一種用於求解微分方程近似解的數值方法. 加權殘值法具有原理統一, 不依賴變分,誤差可知等優點, 常應用於解算流體力學, 固體力學等問題. Weighted residual method involves two major steps.  In the first step, an approximate solution based on the general behavior of the  dependent variable is assumed. The assumed solution is often selected so as to  satisfy the boundary conditions for unknown dependent variable.  This assumed solution is then substituted in the differential equation. Since the  assumed solution is only approximate, it does not in general satisfy the differential  equation and hence results in an error or what we call aresidual.  The residual is then made to vanish in some average sense over the entire solution domain  to produce a system of algebraic equations.  The second step is to solve the system of equations resulting from the first step  subject to the prescribed boundary condition to yield the approximate solution sought. https://github.com/spectralDNS/shenfun   \n Galerkin Method:  https://en.wikipedia.org/wiki/Galerkin_method \n https://en.wikipedia.org/wiki/Eddy-current_sensor \n 2013_sliding interfaces for eddy current simulations.pdf \n Lect16-FEM-Example-BasicSteps.pdf \xa0\xa0 \xa0 Lectures onThe Finite Element Method.pdf \xa0\xa0 \xa0 Topics In Finite Element Solution ofElliptic Problems.pdf \xa0\xa0 \xa0 PracticeProblemsforFiniteElementMethod.pdf \n \n mesh 網格化: \n tetgen_manual.pdf \n tetgen.org \xa0( https://github.com/ufz/tetgen ) \n Python interface to tetgen:\xa0 https://github.com/pyvista/tetgen \n Three Dimensional Boundary Conforming Delaunay Mesh Generation  - Ph.D. dissertation \n', 'tags': '', 'url': 'FEM\xa0theory.html'}, {'title': 'Abaqus', 'text': '', 'tags': '', 'url': 'Abaqus.html'}, {'title': 'Range3', 'text': '\n 啟動 22G 可攜程式系統後, 假設要將 Range3 的原始碼 clone 到 y:\\project2020 目錄中, 在命令列中, 從 y:\\ 目錄 mkdir project2020, 並 cd project2020 後: \n \n git clone --recurse-submodules \xa0 https://github.com/Range-Software/range3.git \n 雖然 Range3 並無 submodules, 但仍以 --recurse-submodules 取下原始碼. \n \n 以滑鼠進入 y:\\msys64\\ 目錄中, 點擊 mingw64.exe 帶出 shell 命令視窗. \n 在 shell 中, 以 cd /y/project2020/range3 進入 range3 程式碼目錄. \n \n \n 在 range3 目錄中執行: \n \n ./scripts/build.sh --clean && ./scripts/create_package.sh \n 就可完成編譯. 編譯完成的檔案為 Y:\\project2020\\range3\\build-Release\\packages\\range-3.2.4.tar.gz \xa0解開壓縮檔案後, 將可攜系統中的 range3_msys2_dlls_platforms.7z 解開所有 .dll 與對應目錄到 bin (編譯完成後只有 Range.exe 與 RangeSolver.exe 兩個檔案), 就可以執行 Range.exe 進行後續的 CAE 分析. \n \n 上述步驟所完成的目錄位於 \xa0 project2020-2_compile_range3.7z \n \n \n start Y:\\msys64\\mingw64.exe \n cd \\y\\tmp\\fem_ex\\range3 \n ./scripts/build.sh --clean && ./scripts/create_package.sh \n \n 其他開源 CAE \n https://en.z88.de/ \n https://su2code.github.io/ \n https://github.com/FreeFem \n', 'tags': '', 'url': 'Range3.html'}, {'title': 'Range3 Tutorial', 'text': 'Range3_beam_ex.7z \n \n \n \n Von Mises Stress  displayed on nodes \n \n', 'tags': '', 'url': 'Range3 Tutorial.html'}, {'title': 'Ngsolve', 'text': 'http://web.pdx.edu/~gjay/teaching/mth610_2015.2/TutorialNGSpy.html \n 利用 Pyside2 建立 GUI 介面程式:  https://github.com/mdecourse/ngsgui \n Netgen_presentation.pdf \n https://ngsolve.org/ \n From Comsol to Ngsolve.pdf \n AutoShape_NGsolve.pdf \n 以下採用 Elmer 與 Matlab 的案例或可與 NGSolve 分析結果比較: \n https://www.csc.fi/web/elmer \n https://github.com/romanszewczyk/FEM \n 2019_Modeling the Influence of a MagnetomechanicalEffect on the Permeability Tensor of a Tensductor Core.pdf \n Matlab: \n 2020_HDGlab An open-source implementation of thehybridisable discontinuous Galerkin method inMATLAB.pdf \n Magnetic Field Computation: \n https://github.com/mdecourse/magpylib \n', 'tags': '', 'url': 'Ngsolve.html'}, {'title': '應用範例', 'text': 'http://sfepy.org/doc-devel/index.html \n \n \n \n \n \n \n', 'tags': '', 'url': '應用範例.html'}, {'title': 'Folding Chair', 'text': 'US6305742_FOLDING MECHANISM FOR FOLDING CHAIR.pdf \n 2019_FOLDING-Swiftset_Brochure-2.pdf \n https://mitylite.com/products/swiftset \xa0 \n \n 分析一下為何這張摺疊椅可以承重超過 400 公斤 \n 與其他專利摺疊椅或產品進行比較分析 \n 利用 Pyslvs-UI 嘗試進行迴避設計 \n \n Collapsible Chair.pdf \n Innovative Design of the Combined Rocking Horse Toy and Folding Chair for Children.pdf \n', 'tags': '', 'url': 'Folding Chair.html'}, {'title': 'Folding Funiture', 'text': 'Foldabilizing Furniture.pdf \n ANALYSIS OF JAPANESE AND FINNISH FURNITURE DESIGN.pdf \n', 'tags': '', 'url': 'Folding Funiture.html'}, {'title': 'Ref', 'text': '', 'tags': '', 'url': 'Ref.html'}, {'title': 'Julia', 'text': 'Julia 是 2012 年出現的高階程式語言, 可以將其視為 21 世紀 Fortran, Python 與 Matlab 合體的新一代運算導向語言. \n http://www.stochasticlifestyle.com/comparison-differential-equation-solver-suites-matlab-r-julia-python-c-fortran/ \n https://discourse.julialang.org/t/ann-gridap-jl-a-feature-rich-finite-element-ecosystem-100-in-julia/42824 \xa0 \n https://github.com/gridap/Gridap.jl \xa0 \n https://gitter.im/Gridap-jl/community \xa0 \n', 'tags': '', 'url': 'Julia.html'}, {'title': 'CMSiMDE', 'text': 'https://websitesetup.org/bootstrap-tutorial-for-beginners/ \n https://colorlib.com/wp/themes/travelify/ \xa0 \n https://github.com/puikinsh/travelify \n 將 cad2_site 搬到 /home/cad2 而 cad2 只是 group \n 以 sudo groupadd cad2 建立 cad2 group \n 以 sudo adduser user1 cad2 將 user1 納入 cad2 group \n cd /home \n sudo chmod -R yen:cad2 cad2 將 cad2 以下所有資料的 owner 設為 yen, group 設為 cad2 \n sudo systemctl restart cmsimde 重新啟動 cmsimde 服務 \n uwsgi.ini 中啟用的 user and group 必須與 cad2_site 資料結構一致, 也就是設為 yen:cad2 \n 如此只要用戶屬於 cad2 群組的用戶都能夠登入後, 進入 /home/cad2/cad2_site 執行 git 指令', 'tags': '', 'url': 'CMSiMDE.html'}]};