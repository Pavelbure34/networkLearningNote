const contents={
    orientation:
        '<h2 class="leftText">OT.Why we should study network!</h2>\
        <div>\
            We connect to internet and surft the web taking it for granted everyday.<br>\
            But we don&rsquo;t really know how all the internet network is connected or <br>\
            how they work with each other.Let&rsquo;s find out all about network with me!<br>\
        </div>',
    day01:
        '<h2 class="leftText">day01.Home network and SOHO</h2>\
        <div>\
            <h3 class="centerText">Home Network</h3>\
            <div id="img1"></div>\
            <div>\
                As you see, you can have phone,desktop, laptop connected to<br>\
                <span class="emphBlue">router</span>\
                which is connected to\
                <span class="emphBlue">modem</span>\
                that lets you link to<br>\
                internet(WWW).\
                <ul>\
                    <li>Based on condition,\
                        <span class="emphBlue">router or switch</span> decides\
                        where data from one device go.\
                    </li>\
                    <li>\
                        The size of network varies from home,company,country!\
                    </li>\
                </ul>\
            </div>\
        </div>\
        <div>\
            <h3 class="centerText">Small Office or Home office</h3>\
            <div id="img2"></div>\
            <div>\
                As you see, printers,other equipment, desktop, laptop are connected to<br>\
                <span class="emphBlue">switch</span>\
                which is connected to\
                <span class="emphBlue">router</span>\
                that lets you link to<br>\
                internet(WWW).\
                <ul>\
                    <li>Based on condition,\
                        <span class="emphBlue">switch</span> decides\
                        where data from one device go.\
                    </li>\
                    <li>Based on condition,\
                        <span class="emphBlue">router</span> connects\
                        to WWW with \
                    </li>\
                    <li>\
                        The size of network varies depending on your office!\
                    </li>\
                </ul>\
            </div>\
        </div>',
    day02:
        '<h2 class="leftText">day02.ping and traceRoute</h2>\
        <div>\
            <h3 class="centerText">ping</h3>\
            <div class="clearB"></div>\
            <div id="img1" class="floatL"></div>\
            <div class="floatL">\
                This allows you see time and<br>\
                    size of data of routing.\
            </div>\
            <div class="clearB"></div>\
        </div>\
        <div>\
            <h3 class="centerText">traceRoute</h3>\
            <div class="clearB"></div>\
            <div id="img2" class="floatL"></div>\
            <div class="floatL">\
                This allows you to track down each path<br>\
                before reaching your destination.\
            </div>\
            <div class="clearB"></div>\
        </div>\
        <div>\
            <h3 class="centerText">Why are these two commmand important?</h3>\
            It allows you to see how your even simple internet<br>\
            is done to make sure you understand network.\
        </div>',
    day03:
        '<h2 class="leftText">day03.IP address and basic component</h2>\
        <div>\
            <h3 class="centerText">IP address</h3>\
            <blockquote>\
                <span class="emphRed">IP address</span> =\
                <span class="emphBlue">I</span>nternet\
                <span class="emphBlue">P</span>rotocol\
                address.\
            </blockquote>\
            It is equivalent to pointer in C++ and home address.<br>\
            There are other types of address in network such as network address,host address.<br>\
        </div>\
        <div>\
            <h3 class="centerText">basic component</h3>\
            <ul class="noBulletPt">\
                <li>\
                    Physical Component:\
                    <blockquote>\
                        Making <span class="emphBlue">a physical connection</span>\
                            using various kinds of <span class="emphBlue">cables</span>.\
                    </blockquote>\
                    <ul>\
                        <li>Optical,fiber,ethernet cables...</li>\
                        <li>Using logical topology,various protocols...</li>\
                        <li>For internet protocol,uses ethernet cables to NIC in PC.</li>\
                    </ul>\
                </li>\
            </ul>\
        </div>',
    day04:
        '<h2 class="leftText">day04.Domain Name System</h2>\
        <div>\
            <h3 class="centerText">DNS</h3>\
            <blockquote>\
                <span class="emphRed">DNS</span>\
                (<span class="emphBlue">D</span>omain\
                <span class="emphBlue">N</span>ame\
                <span class="emphBlue">S</span>ystem)\
                changes <span class="emphBlue">IP addresses</span>\
                    into <span class="emphBlue">names</span>.\
                    <div class="indented">\
                    ex)facebook or google.com = their IP address.\
                    </div>\
            </blockquote>\
        </div>',
    day05:
        '<h2 class="leftText">day05.OSI model and layers</h2>\
        <div>\
            <blockquote>\
                <span class="emphRed">OSI</span>(\
                    <span class="emphBlue">O</span>pen\
                    <span class="emphBlue">S</span>ystem\
                    <span class="emphBlue">I</span>nterconnection)\
                        model governs\
                        <span class="emphBlue">how devices communicate</span>\
                    to each other!\
            </blockquote>\
            Older OSI model used to have single vendor in the system<br>\
            and it causes so many troubles.So, in order to solve this problem,\
            International Standard Organization came up with new system with\
            <span class="emphBlue">layers</span>.\
            <div>\
                <div class="clearB"></div>\
                <div class="floatL">\
                    <ul>\
                        <caption>Older models...</caption>\
                        <li><span class="emphBlue">single</span> vendor</li>\
                        <li><span class="emphBlue">Propriety</span></li>\
                        <li><span class="emphBlue">Slow</span> development</li>\
                    </ul>\
                    <ul>\
                        <caption>Layers system allow us...</caption>\
                        <li><span class="emphBlue">inter-operability</span></li>\
                        <li><span class="emphBlue">multiple</span> vendors</li>\
                        <li><span class="emphBlue">Multiple</span> applications</li>\
                        <li>\
                            <span class="emphBlue">Fast</span> and <span class="emphBlue">split</span> development\
                            <div class="indented">\
                                Application developer does not have to know network or Presentation\
                                when developing!\
                            </div>\
                        </li>\
                        <li>Because of this,we can visit facebook.com in personal laptop!</li>\
                    </ul>\
                </div>\
                <div class="floatL">\
                    <h3 class="centerText">Layers</h3>\
                    <ol class="noBulletPt">\
                        <li>\
                            7.<span class="emphRed">Application</span>\
                            (<span class="emphBlue">All</span>)\
                        </li>\
                        <li>\
                            6.<span class="emphRed">Presentation</span>\
                            (<span class="emphBlue">People</span>)\
                        </li>\
                        <li>\
                            5.<span class="emphRed">Session</span>\
                            (<span class="emphBlue">Sleeping</span>)\
                        </li>\
                        <li>\
                            4.<span class="emphRed">Transport</span>\
                            (<span class="emphBlue">Through</span>)\
                        </li>\
                        <li>\
                            3.<span class="emphRed">NetWork</span>\
                            (<span class="emphBlue">Networking</span>)\
                        </li>\
                        <li>\
                            2.<span class="emphRed">Data Link</span>\
                            (<span class="emphBlue">Don&rsquo;t</span>)\
                        </li>\
                        <li>\
                            1.<span class="emphRed">Physical</span>\
                            (<span class="emphBlue">Pass</span>)\
                        </li>\
                    </ol>\
                </div>\
                <div class="clearB"></div>\
            </div>\
            <div>\
                Each layer is\
                <span class="emphBlue">independent</span> and\
                <span class="emphBlue">do not cross each other</span>.<br>\
                <ul>\
                    <li>\
                        <span class="emphBlue">7,6,5 layers</span>\
                            used to be domain of\
                            <span class="emphBlue">developers</span>.\
                    </li>\
                    <li>\
                        <span class="emphBlue">1,2,3,4 layers</span>\
                            used to be domain of\
                            <span class="emphBlue">network engineer</span>.\
                    </li>\
                    <li>\
                        However, <span class="emphBlue">VMware and VirtualBox</span>\
                            make\
                            <span class="emphBlue">the separation blurry and meaningless</span>.\
                    </li>\
                </ul>\
            </div>    \
        </div>',
    day06:
        '<h2 class="leftText">day06.OSI model:7,6,5 developers layer</h2>\
        <div>\
            <ul>\
                <li>\
                    7. Application = network process to application\
                    such as <span class="emphBlue">process access to users</span>.\
                    <div class="indented">\
                        <ul>\
                            <caption>Real life examples.</caption>\
                            <li>firefox,chrome,safari(HTTP protocol)</li>\
                            <li>Microsoft Outlook(...)</li>\
                            <li>FDP,Telnet(...)</li>\
                        </ul>\
                    </div>\
                </li>\
                <li>\
                    6. Presentation = data syntax and representation\
                    <div class="indented">\
                        More Directly, how one data from here can be successfully<br>\
                        read by the other application.\
                        <blockquote>\
                            Is my Data\
                                <span class="emphBlue">readable</span>?<br>\
                                <span class="emphBlue">MP3 files</span>\
                                can <span class="emphRed">not be read</span> by\
                                <span class="emphBlue">MSWord</span>!\
                        </blockquote> \
                        Ex) PNG,JPG,AVI,ASCII.\
                    </div>\
                </li>\
                <li>\
                    5. Session = interhost communication\
                    involving \
                        <span class="emphBlue">establishment,maintenance,termination</span>\
                    of sessions between Applications.\
                    <ul>\
                        <caption>Ex)</caption>\
                        <li>OPC</li>\
                        <li>NPC</li>\
                    </ul>\
                </li>\
            </ul>\
        </div>',
    day07:
        '<h2 class="leftText">day07.OSI model:rest of them server engineer layer</h2>\
        <ul>\
            <li>\
                4.<span class="emphRed">Transport</span>:\
                    End-to-End-Connections.\
                <ul>\
                    <caption>It does</caption>\
                    <li>message(data?) <span class="emphBlue">segmentation</span></li>\
                    <li>so that it is easy to send message.</li>\
                    <li><span class="emphBlue">The receiver</span> will\
                        <span class="emphBlue">reassemble</span> message.</li>\
                    <li>Because of this, this layer handles \
                        <span class="emphBlue">transportation issue and reliability</span> between hosts.</li>\
                    <li>Ex)TCP,UDP\
                        <ul>\
                            <caption>TCP(Trnasmission Control Protocol)</caption>\
                            <li>provides Reliability by its <span class="emphRed">3-way handshake</span></li>\
                            <li><span class="emphBlue">Ensure data retransmission</span>\
                                    if <span class="emphBlue">any packet missing</span>.</li>\
                            <li>Similar to telephone.<span class="emphBlue">I call</span>\
                                    and <span class="emphBlue">the caller calls back!</span></li>\
                        </ul>\
                        <ul>\
                            <caption>UDP(User Datagram Protocol)</caption>\
                            <li>it does <span class="emphRed">not provide</span>\
                                <span class="emphBlue">retransmission</span>.</li>\
                            <li>Similar to Post service,I write it with address and mail it <span class="emphBlue">without acknowledgement</span>.</li>\
                        </ul>\
                    </li>\
                </ul>\
            </li>\
            <li>\
                3.<span class="emphRed">Network Layer</span>: all about <span class="emphBlue">data delivery by routing packets!</span>\
                <ul>\
                    <li>Layer3 swithches\
                        <ul>\
                            <li>It selects route with the best path</li>\
                            <li>Uses <span class="emphBlue">IPv4</span></li>\
                            <li>criterias of the best path are\
                                <span class="emphBlue">\
                                        cost,hop count,bandwidth,longest match of network address.\
                                </span>\
                            </li>\
                            <ul>\
                                <li>\
                                    <span class="emphRed">OSPF(Open Shortest Path Frist)</span>:checks\
                                        <span class="emphBlue">...</span>.\
                                </li>\
                                <li>\
                                    <span class="emphRed">BGP(Border Gateway Protocol)</span>:\
                                    checks <span class="emphBlue">bandwidth</span> for best routing.\
                                </li>\
                                <li>\
                                    <span class="emphRed">IS-IS(Intermediate System to Intermediate System)</span>:\
                                </li>\
                            </ul>\
                        </ul>\
                    </li>\
                </ul>\
            </li>\
            <li>\
                2.<span class="emphRed">Data Link</span>\
                <ul>\
                    <li>defines <span class="emphBlue">data format</span>\
                            for <span class="emphBlue">transmission</span></li>\
                    <li>how <span class="emphBlue">network is controlled</span></li>\
                </ul>\
                <div class="indented">\
                    For Ethernet, <span class="emphRed">MAC address</span> ia an\
                        <span class="emphBlue">identifier</span> for NIC.\
                    <ul>\
                        <caption>It only consists of </caption>\
                        <li>vender code</li>\
                        <li>Unique value</li>\
                    </ul>\
                </div>\
            </li>\
            <li>\
                1.<span class="emphRed">Physical</span>\
                <ul>\
                    <caption><span class="emphBlue">Binary</span> Transmission</caption>\
                    <li><span class="emphBlue">1 or 0 state</span></li>\
                    <li>defines\
                        <span class="emphBlue">\
                            electrical and mechanical\
                            procedural,functional specification\
                        </span> for\
                        <span class="emphBlue">activation and deactivation</span>\
                            of physical link \
                    </li>\
                    <li>Physical properties of cables differ and vary in look and function</li>\
                    <li>Physical properties play a key role in this layer.</li>\
                </ul>\
            </li>\
        </ul>',
    day08:
        '<h2 class="leftText">day08.OSI model:Host Communucation</h2>\
        <div class="clearB"></div>\
            <div id="img1"></div>\
            <div id="img2"></div>\
        <div class="clearB"></div>\
        <div>\
            Whenever two device communicate with each other,\
            <span class="emphBlue">data is sent</span> from one device to the other.<br>\
            <ul>\
                <caption>How data is sent...</caption>\
                <li>From device A, Data is <span class="emphRed">encapsulated</span></li>\
                <li>On the way to device B, Data is <span class="emphRed">deencapsulated</span></li>\
                <li>However, each layer <span class="emphBlue">of one device</span> \
                    <span class="emphRed">only interacts with the same layer\
                            <span class="emphBlue">of other device</span>.</span>\
                    in <span class="emphBlue">encapsulatio and decapsulation</span>.</li>\
            </ul>\
        </div>\
        <div>\
            <h3 class="centerText">Data Encapsulation</h3>\
            <div id="img3"></div>\
            <ul>\
                <li><span class="emphBlue">Each layer</span>,\
                        adds <span class="emphBlue">its own packet</span> to original data.</li>\
                <li>On Layer2, FCB is added to insure that data is not corrupted.</li>\
            </ul>\
        </div>\
        <div>\
            <h3 class="centerText">Data Deencapsulation</h3>\
            <div id="img4"></div>\
            <ul>\
                <li><span class="emphBlue">Each packet is de-encapulated</span> from the bite data.</li>\
                <li>Then <span class="emphBlue">original data is sent</span> to the other device.</li>\
            </ul>\
        </div>',
    day09:
        '<h2 class="leftText">day09.TCP/IP and hybrid model</h2>\
        <div>\
            These days, OSI models are not used just as the way it is.\
        </div>\
        <div id="img1"></div>\
        <div>\
            <h3 class="centerText">TCP/IP model</h3>\
            <ul>\
                <li><span class="emphRed">Application</span>:\
                    <span class="emphBlue">Top 3 layer of OSI model</span>\
                        is <span class="emphRed">merged</span> into one.\
                </li>\
                <li><span class="emphRed">Transport</span>:\
                    same as OSI model.\
                </li>\
                <li><span class="emphRed">Internet</span>:\
                    equivalent to network layer.\
                </li>\
                <li><span class="emphRed">Network Access</span>:\
                    <span class="emphBlue">Last two layer</span>\
                        grouped <span class="emphRed">together</span>.\
                </li>\
            </ul>\
        </div>\
        <div>\
            <h3 class="centerText">hybrid model</h3>\
            The only difference between this and OSI model is<br>\
            that\
                <span class="emphBlue">\
                    top three layer is grouped togther\
            </span>.\
        </div>\
        <div>\
            <h3 class="centerText">How layers connect to each other</h3>\
            <div id="imgs"></div>\
            <ul>\
                <li>\
                    <span class="emphBlue">Transport -> Application</span> : <span class="emphRed">port number</span> \
                    <div class="indented">\
                        The most common examples are <span class="emphBlue">Telnet(23),HTTP(80),HTTPS,TFTP(69)</span>.\
                    </div>\
                </li>\
                <li>\
                    <span class="emphBlue">Network -> Transport</span> : <span class="emphRed">protocal number</span>\
                    <div class="indented">\
                        The most common protocols in this layer are <span class="emphBlue">TCP and UDP</span>.\
                    </div>\
                </li>\
                <li>\
                    <span class="emphBlue">Data Link -> Network</span> : <span class="emphRed">Type Number from NIC</span>.\
                    <div class="indented">\
                        It is <span class="emphBlue">embedded</span>\
                            in your Network Interface Card(NIC).\
                    </div>\
                </li>\
            </ul>\
        </div>',
    day10:
        '<h2 class="leftText">day10.Intro To Binary and Decimal</h2>\
        <div>\
            <h3 class="centerText">Binary</h3>\
            <blockquote>\
                <span class="emphRed">Binary</span> represents\
                <span class="emphBlue">state</span> of\
                <span class="emphBlue">\
                    connected or disconnected or turned on or turned off(1 or 0)\
                </span>.\
            </blockquote>\
            <ul>\
                <li>It is based on <span class="emphBlue">binary number system</span>.</li>\
                <li>With two cables, you have 4 options\
                    <ul>\
                        <li>00-both cable not connected</li>\
                        <li>01-only second one connected</li>\
                        <li>10-only first one connected</li>\
                        <li>11-both cables connected</li>\
                    </ul>\
                </li>\
                <li>\
                    Similar to above,\
                    <span class="emphRed">IPv4</span> uses\
                    <span class="emphBlue"> 8 binary values</span>\
                    and <span class="emphBlue">4 octet values</span>.\
                    <div>\
                        <div id="img1"></div>\
                        <article>\
                            This IPv4 has seven 0 and one 1.<br>\
                            But IPv4 has\
                             <span class="emphBlue">\
                                total 256(=2<sup>8</sup>) binary combinations\
                            </span>!<br>\
                        </article>\
                    </div>\
                </li>\
            </ul>\
        </div>\
        <div>\
            <h3 class="centerText">Decimal</h3>\
            <blockquote>\
                <span class="emphRed">Decimal</span> represents\
                 <span class="emphBlue">10 base system</span>.\
            </blockquote>\
        </div>\
        <ul>\
            <li>0~9</li>\
            <li>Used in everyday math.</li>\
        </ul>\
        <div id="img2"></div>',
    day11:
        '<h2 class="leftText">day11.Practice binary to decimal,decimal to binary</h2>\
        <div>\
            <h3 class="centerText">Find corresponding decimal from binary</h3>\
            <div class="centerItem">\
                <div class="clearB"></div>\
                <input\
                    id="binary1"\
                    style="width:150px;height:40px;float:left;"\
                    type="text"\
                    readonly\
                >\
                <input\
                    id="decimal1"\
                    style="width:150px;height:40px;float:left;"\
                    type="text"\
                >\
                <input\
                    id="answer1"\
                    style="width:150px;height:40px;float:left;"\
                    type="text"\
                    readonly\
                >\
                <div id="checkBtn1" class="floatL"></div>\
                <div id="refreshBtn1" class="floatL"></div>\
                <div class="clearB"></div>\
            </div>\
        </div>\
        <div>\
            <h3 class="centerText">Find corresponding binary from decimal</h3>\
            <div class="centerItem">\
                <div class="clearB"></div>\
                <input\
                    id="decimal2"\
                    style="width:150px;height:40px;float:left;"\
                    type="text"\
                    readonly\
                >\
                <input\
                    id="binary2"\
                    style="width:150px;height:40px;float:left;"\
                    type="text"\
                />\
                <input\
                    id="answer2"\
                    style="width:150px;height:40px;float:left;"\
                    type="text"\
                    readonly\
                >\
                <div id="checkBtn2" class="floatL"></div>\
                <div id="refreshBtn2" class="floatL"></div>\
                <div class="clearB"></div>\
            </div>\
        </div>',
    day12:
        '<h2 class="leftText">day12.How to convert IP address to binary and vice versa!</h2>\
        <div>\
            <ul>\
                <caption>Format: IP address in Decimal -> binary</caption>\
                <li>129 = 128 + 1 -> 10000001<sub>2</sub></li>\
                <li>123 = 64 + 32 + 16 + 8 + 2 + 1 -> 1111011<sub>2</sub></li>\
            </ul>\
            <ul>\
                <caption>Format: IP address in binary -> decimal</caption>\
                <li>10000001<sub>2</sub> -> 128 + 1 = 129</li>\
                <li>1111011<sub>2</sub> -> 64 + 32 + 16 + 8 + 2 + 1 = 123</li>\
            </ul>\
        </div>',
    day13:
        '<h2 class="leftText">day13.Intro to Hexadecimal</h2>\
        <section>\
            Just like <span class="emphBlue">Binary system</span>\
             is used to <span class="emphBlue">identify unique devices in IP adress</span>,<br>\
             <span class="emphRed">Hexadecimal system</span>\
              is used to <span class="emphBlue">identify MAC addresses of NIC\
                  and IPv6 addresses.\
              </span>.\
            <ul>\
                <li>digits:0,1,2,3,4,5,6,7,8,9,A(=10),B(=11),C(=12),D(=13),E(=14),F(=15)</li>\
                <li>example of MAC address) 0A.B2.23.45.AA.3C</li>\
            </ul>\
        </section>\
        <section>\
            <h3 class="centerText">Conversion</h3>\
            <div>\
                <h4 class="leftText">Binary to Hexadecimal</h4>\
                <div class="clearB"></div>\
                <ul class="floatL">\
                    <caption>how to</caption>\
                    <li>split by 4 bytes</li>\
                    <li>Get decimal for each division</li>\
                </ul>\
                <ul class="floatL">\
                    <caption>For example</caption>\
                    <li>100000001<sub>2</sub>=1000 0001</li>\
                    <li>8 + 1 = 8 + 0 = 80<sub>16</sub></li>\
                </ul>\
                <div class="clearB"></div>\
            </div>\
            <div>\
                <h4 class="leftText">decimal to Hexadecimal</h4>\
                <div class="clearB"></div>\
                <ul class="floatL">\
                    <caption>how to</caption>\
                    <li>divide it by 16</li>\
                    <li>for each division, check remainder</li>\
                    <li>remainder becomes the digit.</li>\
                </ul>\
                <ul class="floatL">\
                    <caption>For example</caption>\
                    <li>129<sub>10</sub>=81<sub>16</sub></li>\
                </ul>\
                <div class="clearB"></div>\
            </div>\
            <div>\
                <h4 class="leftText">IPv4 address into dexadecimal</h4>\
                <div class="clearB"></div>\
                <ul class="floatL">\
                    <caption>how to</caption>\
                    <li>make each octect value into binary</li>\
                    <li>then make each binary into hexadecimal</li>\
                </ul>\
                <ul class="floatL">\
                    <caption>For example</caption>\
                    <li>129.6.3.2\
                        <ul>\
                            <li>129 = 1000 0001<sub>2</sub> = 81<sub>16</sub></li>\
                            <li>6 = 0000 0110<sub>2</sub> = 06<sub>16</sub></li>\
                            <li>3 = 0000 0011<sub>2</sub> = 03<sub>16</sub></li>\
                            <li>2 = 0000 0010<sub>2</sub> = 02<sub>16</sub></li>\
                        </ul>\
                        =81.06.03.02<sub>hexa</sub>\
                    </li>\
                </ul>\
                <div class="clearB"></div>\
            </div>\
        </section>',
    day14:
        '',
    day15:
        '',
    day16:
        '',
}