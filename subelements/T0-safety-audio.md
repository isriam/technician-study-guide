# T0 — Safety

## Electrical and Power Safety

Let's talk about the hazards that come with working around electricity and batteries at your amateur radio station. Even something as simple as a 12-volt storage battery can be dangerous — not because it'll shock you through dry skin, but because shorting the terminals can deliver hundreds of amps instantly, melting wires, causing burns, and potentially igniting hydrogen gas. The danger from a 12-volt battery is about massive current, not voltage.

Speaking of current, when electrical current flows through the human body, it causes multiple hazards. It heats tissue, causing burns. It disrupts the electrical functions of cells, which can stop your heart or damage nerves. And it causes involuntary muscle contractions, which can prevent you from letting go of the source. Even small currents through the heart can be fatal. All three of these effects are real dangers.

Understanding wire color coding is essential. In the United States, three-wire 120 volt cables use a standard color system. Black wire insulation indicates the hot conductor — the dangerous one carrying the full 120 volt potential. White is neutral, and green or bare wire is the equipment ground. Black equals hot — memorize that.

Fuses and circuit breakers are there to remove power in case of an overload. A fuse opens when current exceeds its rating, disconnecting the circuit to prevent fire and equipment damage. But here's a critical point — a fuse does not prevent electrical shock. The current needed to kill you is far below what a typical fuse is rated for.

Never replace a 5-ampere fuse with a 20-ampere fuse. A larger fuse would allow four times the designed current to flow through wiring rated for only 5 amps. The wires overheat and can start a fire long before the fuse ever blows. Always replace fuses with the exact same rating — never go larger. This is a fundamental fire safety rule.

A fuse or circuit breaker should be installed in series with the hot conductor only. Fusing the neutral wire could create a dangerous condition where equipment appears to be turned off but the hot wire is still live. And a fuse in parallel would short-circuit the power line. Series with the hot wire only is the safe configuration.

There are several good practices to guard against electrical shock at your station. Use three-wire cords and plugs for all AC powered equipment. Connect all AC powered station equipment to a common safety ground to prevent dangerous voltage differences between pieces of equipment. And install mechanical interlocks in high-voltage circuits to prevent access when they're energized. All three of these practices are important — layered safety is the best approach.

## Battery Safety

Charging or discharging a battery too quickly creates a serious hazard — overheating and out-gassing. Rapid charging generates excessive heat, and batteries can vent hydrogen gas under pressure. In sealed batteries, this buildup can cause the battery to rupture or even explode. Both lead-acid and lithium batteries are susceptible. Always use appropriate charge rates.

## Power Supply Hazards

Here's something that catches people off guard. After you turn off a power supply, a hazard still exists from charge stored in filter capacitors. Large filter capacitors can hold lethal voltages for minutes or even hours after the supply is powered down. Always treat a recently turned-off power supply as dangerous, and make sure high-voltage capacitors are safely discharged before working on equipment. This has killed many technicians over the years.

When measuring high voltages with a voltmeter, make sure that both the voltmeter and its leads are rated for the voltages you're measuring. Using a meter or leads not rated for the voltage can result in arcing, insulation breakdown, and electrocution. You want a meter with a CAT III or CAT IV rating for high-voltage work. And note that you want high impedance in a voltmeter, not low — a low impedance meter would draw excessive current.

## Grounding and Lightning Protection

All external ground rods or earth connections should be bonded together with heavy wire or conductive strap. This creates a single unified ground system with no voltage differences between rods. During a lightning strike, separate unbonded grounds can have dangerous voltage differences. Bond everything together — your electrical panel ground, radio ground, and tower ground — into one system.

A lightning arrester in a coaxial feed line should be installed on a grounded panel near where the feed lines enter the building. This stops lightning energy at the building entry point before it can get into your shack. Placing it at the radio or at the antenna wouldn't protect the building wiring and equipment between those points.

## Tower Safety and Antenna Installation

Tower climbing is serious business, and every safety rule exists for a reason. When climbing an antenna tower, you need sufficient training on safe climbing techniques, you must use appropriate tie-off to the tower at all times, and you must always wear an approved climbing harness. All three requirements are mandatory — falls from towers are frequently fatal.

Under what circumstances is it safe to climb a tower without a helper or observer? The answer is never. Always have a ground observer who can call for help if you fall or become incapacitated. There are no exceptions to this rule — not the height of the climb, not the type of work, not your experience level. A fall from 10 feet can kill you just as easily as one from 100 feet.

One of the most important safety precautions when putting up an antenna tower is to look for and stay clear of any overhead electrical wires. Contact with power lines during tower installation is one of the most common causes of amateur radio fatalities. A tower, antenna, or guy wire touching a power line is instantly lethal. Always survey for power lines before any antenna work. And never insulate a tower base — it needs to be grounded.

The minimum safe distance from a power line when installing an antenna follows a simple rule. If the antenna falls in any direction, no part of it should be able to come closer than 10 feet to the power wires. This accounts for the antenna's full height and reach if it falls. Power line contact kills — maintain clearance even in a worst-case collapse scenario.

You should avoid attaching an antenna to a utility pole because the antenna could contact the high-voltage power lines on that pole. Whether during installation, high winds, ice loading, or structural failure, the risk of contact is too great. This is potentially fatal.

Turnbuckles are used to tension guy lines on towers, and a safety wire through the turnbuckle prevents it from loosening due to wind and vibration. Without this simple precaution, the turnbuckle can gradually unscrew, loosening the guy wires and potentially toppling the tower.

Crank-up towers have a special safety rule — they must not be climbed unless fully retracted or unless mechanical safety locking devices have been installed. The locking devices prevent the tower sections from telescoping down on you if the cable or winch fails. Without those locks in place, a crank-up tower is essentially a guillotine. And just to be clear, crank-up towers should absolutely be grounded and can be painted.

The proper grounding method for a tower requires separate eight-foot ground rods for each tower leg, all bonded to the tower and to each other. Four-foot rods are too short, a single rod is insufficient, ferrite chokes are for RF filtering not lightning protection, and a cold water pipe alone isn't adequate for tower grounding.

## Lightning Ground Conductors

When installing grounding conductors for lightning protection, keep the connections short and direct. Lightning's fast-rising pulse needs a low-inductance path to earth. Long, winding paths have too much inductance. Sharp bends must be avoided because they create high inductance points where lightning can arc across the bend rather than following the conductor. Use smooth, sweeping curves and the most direct route possible.

Grounding requirements for an amateur radio tower or antenna are established by local electrical codes, which are based on the National Electrical Code. FCC Part 97 covers radio rules, the FAA covers tower lighting for aviation safety, and UL tests equipment — none of these set grounding standards for towers.

## RF Exposure Safety

Radio signals are non-ionizing radiation. They don't have enough energy to knock electrons from atoms or break chemical bonds the way ionizing radiation like gamma rays, X-rays, or alpha particles can. RF radiation can cause tissue heating, but it does not cause the DNA damage associated with ionizing radiation. It's important to understand that RF radiation is not perfectly safe — it can cause thermal burns and tissue heating — but it works through a fundamentally different mechanism than radioactivity.

The human body absorbs more RF energy at some frequencies than at others, and this is why exposure limits vary with frequency. Peak absorption occurs when body dimensions are resonant with the wavelength, which for an adult is around 50 megahertz. That's why the maximum permissible exposure limit is lowest at 50 megahertz — the body absorbs RF most efficiently in the 30 to 300 megahertz range. This is a critical safety fact to know.

Several factors affect the RF exposure of people near an amateur station antenna. These include frequency and power level of the RF field, distance from the antenna to a person, and the radiation pattern of the antenna. All of these must be considered when evaluating RF exposure. Distance is especially important because exposure drops with the square of the distance from the antenna.

Duty cycle plays an important role in RF safety calculations. Duty cycle is the percentage of time that a transmitter is transmitting during the averaging period. Note that it's the time transmitting, not the time not transmitting — watch for that distinction. CW has roughly 40 to 50 percent duty cycle, SSB voice about 20 to 40 percent, and FM is near 100 percent when the push-to-talk button is pressed.

Because duty cycle affects the average exposure to radiation, it directly influences safe RF radiation exposure levels. If duty cycle drops from 100 percent to 50 percent, the allowable power density increases by a factor of 2. At 50 percent duty cycle, you're only transmitting half the time, so average exposure is halved, meaning you can use twice the power density while still meeting the same average exposure limits.

Touching an antenna during a transmission creates a specific hazard — RF burns to the skin. This is localized tissue heating at the contact point, different from electrocution or radiation poisoning. RF burns can be severe and deep, damaging tissue beneath the skin surface.

The most effective way to reduce exposure to RF radiation is to relocate antennas farther from people. Field strength drops with the square of distance, so even small increases in distance make a big difference. Moving just the transmitter doesn't help because the antenna is the actual source of radiation. And increasing duty cycle would increase exposure, not reduce it.

There are several acceptable methods to determine whether your station complies with FCC RF exposure regulations. You can calculate based on FCC OET Bulletin 65, use computer modeling, or measure field strength with calibrated equipment. The FCC accepts all three approaches. Most amateurs use the OET Bulletin 65 method since it doesn't require expensive measurement equipment.

Whenever you change an item in your transmitter or antenna system, you should re-evaluate the station for RF safety compliance. Any change to transmitter power, antenna type, height, or location could change the RF exposure profile. Low SWR helps efficiency but doesn't directly determine RF safety compliance, and the FCC doesn't require notification of station changes.

The station licensee is responsible for ensuring that no person is exposed to RF energy above the FCC exposure limits. It's your license, your station, your responsibility. Not the FCC's job to check every station, not the public's job to protect themselves, and not the local zoning board's concern. You must evaluate and ensure compliance yourself.
