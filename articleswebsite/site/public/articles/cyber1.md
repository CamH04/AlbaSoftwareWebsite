* * *

Goldshadow Cybersecurity Analysis
==============================================================

### 11th April 2025, [Cameron](https://camhdeveloper.netlify.app/)


## Abstract
This report is designed to outline the risks and mitigations in relation to the changes that Goldshadow with to make in relation to their network stack and/or structure in their new office. The critical risks of the network structure consist of unsecure Wi-Fi networks , the possibility of human error as well as the use of Ethernet Over Power adapters which have shown to be an extremely effective angle of attack for offices (Elinor Mills 2011).
The mitigations to the most critical risks consist of the use of common encryption and redundancy check systems as well as staff training on basic cyber threats.

## Introduction
The proposed floor layout for Goldshadow includes a ground floor and a third floor. The ground floor features an HR open office with 15 terminals, Directors' offices for 3 teams (1 terminal each), a receptionist, a meeting room with a PC, and two server rooms—one for accounting file servers and systems, and another for backup servers and inter-floor connection equipment. The third floor houses open-plan offices with 16 PCs for critical teams (CEO, legal, accounting, and technicians), along with two server rooms: one for departmental file servers and connection equipment, and another for the networking hub with switches. Temporary Wi-Fi connects the floors, with plans to transition to Ethernet Over Power adapters. Only the third floor has planned Ethernet cabling. Physical documents are stored in a cabinet room on the third floor, and power separation is enforced for accurate billing.

As outlined by Jeroen Van Der Ham. 2021 cybersecurity refers to “the activity and associated risks of cyber security” meaning the risks of a computer system in terms of the CIA triad (Confidentiality, Integrity,Availability) , which explained further later on in this report. A way to describe how cybersecurity effects the CIA triad would be how the recent Crowdstrike incident where faulty software effecting the Windows 10 operating systemand how it effected the availability of systems and of data.

Industry has learnt from incidents of cybersecurity breaches. An expansive amount of work has been done in order to make sure that data can stay in the hands of those who should have it, as shown by Clare M. Patterson et al. 2023 by compiling 30 articles from a list of 3,986 of cybersecurity testing and research and collecting many of the mitigations discussed within the report.

This report will be analysing the risks associated with the suggested floor plan and network structure and will be providing solutions and mitigations to these risks.

## Discussion Of CIA

The CIA triad as defined by Livinus Obiora Nwek (2017) and Osaro Mitchell et al. (2023) is defined as Confidentiality (data only being able to be accessed by those with correct permissions) , Integrity (the sent data processed and stored has not been changed from its original state) and Availability (Can the system be accessed when I is needed to be). Compared to the AAA model defined as authentication, authorization and accounting (Margaret Rouse (n.d)) is the manifesting steps that result from the actions taken to protect the aspects outlined in CIA.

Confidentiality in the context of this report will be centred around the security of data and who has access to it. Especially considering that the company has in house servers for storing data for all business related data as well as storing personal information about people working at the company and/or clients.

Integrity will revolve around the data that is being stored in the servers and transmitted to and from the terminals in use in the building as well as over the Wi-Fi connection cant be changed or become corrupted during transmission from one device to another whether that's to another user operated device or to a network management device such as a router or switch. An example of what can effect integrity would be a cyber attack or a reliance on outdated systems (IBM 2023).

Availability will refer to a systems uptime in the case of this report. An example would be how susceptible the network is to a DDOS (Distributed Denial Of Service) attack, as these attack will render a network system unusable for the duration of the attack. This can be shown with the example of when a botnet could make systems using D-Link routers (a very common router brand) inoperable in 2024 by exploited an outdated firmware version (Bill Toulas 2024).

## Risks

A very critical risk of the proposed system lies within the use of a Wi-Fi connection to connect two floors,not only is this due to the ease of being able to track data as an unauthorised user as long as you're in range of the connection therefore , affecting confidentiality. But it could also effect integrity by being able to intercept and edit data during transit.

Bugs from older hardware can affect both availability, from DDOS attacks due to older hardware being more susceptible as a result of their weaker hardware , as well as affecting confidentiality as they lack the most recent security patches such as in the case of the WannaCry ransomware attack which only affected devices running out of support versions of Windows such as Windows XP (Warren, T. (2017)), this attack specificity affected both confidentiality and availability .

Ethernet Over Power (EOP) adapters, of which are being planned to be used to connect the first floor, allow for the transition of network information through the power lines of a building (www.transition.com. 2018). The use of EOP can be a security concern as any third party can remotely gain access to the network. This occurs because commonly these adapters encryption techniques can be broken down into 3 parts: Network Encryption Keys (NEK), Network Membership Keys (NMK), and Device Access Keys (DAK).A way to be able to exploit this goes as follows: a attacker can scan a network for any physical addresses (MAC addresses) and with that can derive a DAK using that address and using that DAK you can en roll a new device onto a network without requiring physical access to the network therefore having full access to the network remotely, (Tasker, B. 2014). This attack compromises confidentiality of user data as it can be monitored by unauthorised personnel with tools such as Wireshark (EmLogic 2024)

A commonly overlooked risk with any network is human error. 88% of cybersecurity breaches are caused by human error (Breachsense, 2024)  such as falling for a Phishing email (a malicious email that poses as a legitimate source). However a report by IBM Security Services 2014 shows it could be closer to 95% (IBM Security Services 2014).

## Proposed Mitigations

To encrypt wifi traffic (such as WPA3) to help with the issues concerning confidentiality. As well as with the  Wifi, make user have to sign in using company assigned accounts to use the Wi-Fi. To help with issues affecting integrity you can implement protocols (a set of network rules for data transmission (CloudFlare.com. 2024)) that allow for the use of checksums (values within a network packet that can check for any changes during transition) alongside cyclic redundancy checks (CRC’s) (J Stone et al 1998) such as 802.11a with a CRC-32 algorithm.

To keep software up to date through updating whenever a patch is released is to cancel many attack vectors by remote malicious actors such as exploiting old firmare versions in the case of the TP-Link DDOS attack. As well as this make sure any hardware used is up to date as well as within the specification of its relevant standards.

To keep staff trained of cyber security threats and to train staff on procedures to prevent human error as much as possible.

Many issues can be prevented via continuous monitoring of a system in performance critical systems such as the in house network of Goldshadow.(Alex Malin and Graham Van Heule. 2013.)

The most effective and simple way of denying a EOP attack vector is by using dedicated Ethernet cabling for data transmission with separate cabling for power to connect the first floor to the rest of the network.

## Conclusions

In summary the primary risks effecting this system is the use of unsecured WiFi , Out of date equipment, the use of EOP as well as the potential for human error. These key factors here can influence the aspects of confidentiality , integrity and availability meaning they must be mitigated against. This can be done with staff training, various forums of encryption and checks on the network as well as constant software and hardware maintenance and upkeep. Continuous monitoring comes along with the mitigation techniques of which is outlined by Fortinet. (n.d.), stating that it is important to do so due to the ability to “Identify security threats sooner”. These also come along with periodic security audits, which according to Sergeja Slapničar, et al 2022 has been shown to be extremely effective at forming a “a more mature cyber security risk management” however alone, doesn’t decrease the risk of a cyber attack.


## References
Jeroen Van Der Ham. 2021. Toward a Better Understanding of “Cybersecurity”. Digital Threats 2, 3, Article 18 (September 2021), 3 pages. (https://doi.org/10.1145/3442445)

Mitchell Osaro & Osazuwa, Mitchell & Msc, & Cpss, & Css, & Fty,. (2023). Confidentiality, Integrity, and Availability in Network Systems: A Review of Related Literature. 8. 10. 10.5281/zenodo.10464076.
(https://ijisrt.com/assets/upload/files/IJISRT23DEC1449.pdf)


Clare M. Patterson, Jason R.C. Nurse, Virginia N.L. Franqueira (2023), Learning from cyber security incidents: A systematic review and future research agenda,Computers & Security,Volume 132,103309,ISSN 0167-4048,(https://www.sciencedirect.com/science/article/pii/S0167404823002195)
Alex Malin and Graham Van Heule. 2013. Continuous monitoring and cyber security for high performance computing. In Proceedings of the first workshop on Changing landscapes in HPC security (CLHS '13). Association for Computing Machinery, New York, NY, USA, 9–14. (https://doi.org/10.1145/2465808.2465810)

www.transition.com (2018). Transition Networks White paper Power-over-Ethernet (https://www.anixter.com/content/dam/Suppliers/Transition-Networks/Brochures/Power-over-Ethernet-OverviewWhitePaper.pdf)
Tasker, B. (2014). Vulnerability: Infiltrating a network via Powerline (HomePlugAV) adapt. [online] www.bentasker.co.uk. Available at: (https://www.bentasker.co.uk/posts/documentation/security/282-infiltrating-a-network-via-powerline-homeplugav-adapters.html)

Livinus Obiora Nweke 2017 , Using the CIA and AAA Models to Explain Cybersecurity Activities
(https://pmworldlibrary.net/wp-content/uploads/2017/05/171126-Nweke-Using-CIA-and-AAA-Models-to-explain-Cybersecurity.pdf)

Margaret Rouse (n.d). Authentication, Authorization, and Accounting (AAA). Retrieved from
(http://searchsecurity.techtarget.com/definition/authentication-authorization-and-accounting)


IBM 2023, Data Integrity Issues: Examples, Impact, and 5 Preventive Measures (https://www.ibm.com/think/insights/data-integrity-strategy)

Bill Toulas, 2024, Malware botnets exploit outdated D-Link routers in recent attacks (https://www.bleepingcomputer.com/news/security/malware-botnets-exploit-outdated-d-link-routers-in-recent-attacks/)

Breachsense, 2024, Why are so many data breaches caused human error? (https://www.breachsense.com/blog/data-breach-human-error/)

IBM Security Services 2014, Cyber Security Intelligence Index
Analysis of cyber attack and incident data from IBM’s worldwide security operations (https://i.crn.com/sites/default/files/ckfinderimages/userfiles/images/crn/custom/IBMSecurityServices2014.PDF)

EmLogic 2024, Wi-Fi sniffing with Wireshark (https://emlogic.no/2024/01/wi-fi-sniffing-with-wireshark/)

Cloudflare.com. (2024). What is a protocol? | Network protocol definition. [online] Available at: https://www.cloudflare.com/en-gb/learning/network-layer/what-is-a-protocol/.

J. Stone,et al 1998 "Performance of checksums and CRCs over real data," in IEEE/ACM Transactions on Networking, vol. 6, no. 5, pp. 529-543, Oct. 1998, doi: 10.1109/90.731187.
https://ieeexplore.ieee.org/document/731187

Warren, T. (2017). Microsoft issues ‘highly unusual’ Windows XP patch to prevent massive ransomware attack. [online] The Verge. Available at: https://www.theverge.com/2017/5/13/15635006/microsoft-windows-xp-security-patch-wannacry-ransomware-attack.
‌
Fortinet. (n.d.). What Is Network Monitoring? [online] Available at: https://www.fortinet.com/resources/cyberglossary/network-monitoring.
‌
Sergeja Slapničar, et al 2022 Effectiveness of cybersecurity audit, International Journal of Accounting Information Systems, Volume 44, 100548, ISSN 1467-0895, https://doi.org/10.1016/j.accinf.2021.100548. (https://www.sciencedirect.com/science/article/pii/S1467089521000506)

Elinor Mills 2011 Attacking home automation networks over power lines  (https://www.cnet.com/news/privacy/attacking-home-automation-networks-over-power-lines/)
