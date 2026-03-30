import post4 from "@/assets/Kashi.jpg";
import post7 from "@/assets/Electricity.jpg";

export interface BlogPost {
  slug: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "kashi-vishwanath-where-divinity-meets-the-dust",
    image: post4,
    category: "Travel",
    title: "Kashi Vishwanath: Where Divinity Meets the Dust",
    excerpt:
      "There are places on this earth that don't just move you — they unmake you, quietly, and put you back together differently. Varanasi is one of them. Kashi Vishwanath is its beating heart.",
    date: "Mar 10, 2026",
    readTime: "7 min read",
    content: `There are places on this earth that don't just move you — they unmake you, quietly, and put you back together differently. Varanasi is one of them. Kashi Vishwanath is its beating heart.

The city hits you before you even arrive. Somewhere on the approach — whether by train, by road, or by boat on the Ganga — the air changes. It becomes heavier, thicker, laced with the smell of incense and marigold and river clay. There's a feeling that something is asking you to slow down, not as a suggestion but as a quiet command. You lower your voice without knowing why.

The narrow lanes leading to the temple are unlike anything else in the world. They're not streets so much as arteries — ancient, winding, barely wide enough for two people to pass each other if they turn sideways. The walls on either side are close enough to touch with both arms outstretched. Every few steps, a small shrine appears — a painted Ganesh, a brass lamp burning in a niche in the stone, a vendor with a basket of bilva leaves and flowers for the offering. The lane smells of sandalwood and something older, something that has been burning for centuries without interruption.

And then, without warning, you are there.

The first sight of the temple spires — the shikhara rising gold against the sky — does something to your chest that is difficult to explain in ordinary language. It isn't excitement exactly. It's closer to recognition, as though something deep inside you remembers this place even if your waking mind does not. The gold is blinding in the afternoon sun, almost aggressive in its brilliance, and yet the overall atmosphere is one of extraordinary stillness.

Inside the temple complex, after the security check, after removing your footwear and feeling the cool stone beneath your feet, the crowd thins slightly and the noise of the lanes drops away. People move here differently — slower, quieter, with a kind of purposeful reverence. You can hear the chanting clearly now. It rises and falls in a rhythm that feels like a heartbeat, steady and ancient, and it fills the space between your thoughts until there is nothing left but the sound.

Standing before the Jyotirlinga — the sacred Shivling of Kashi Vishwanath — is an experience that resists description. The air in that inner sanctum is warm and dense with the fragrance of rudraksha and camphor and fresh flowers pressed close. Priests move with a practiced grace, conducting rituals that have been performed in this exact spot, in this exact way, for over a thousand years. When you close your eyes in that moment, the world outside — the noise, the news, the weight of ordinary days — becomes genuinely impossible to imagine. It is as if the temple exists slightly outside of time, or rather, as if it is the only real point and everything else is the distraction.

There is a calmness there that is not passive. It is alive. It pulses. It asks nothing of you but your presence, and in return it gives you something you didn't know you were missing — the rare and complete sense that you are exactly where you are supposed to be.

No trip to Kashi Vishwanath is whole without stepping into the Annapurna temple, which stands just behind the main mandir, close enough that you pass from one sacred space into another in just a few steps. Annapurna, the goddess of nourishment, is worshipped here with a devotion that feels entirely different from the awe of Vishwanath — it is warmer, more maternal, like walking from a magnificent palace into someone's grandmother's kitchen.

The bhog served at Annapurna Devi's temple is something you will think about long after you have left Varanasi. It is simple — dal, rice, a sabzi, sometimes a halwa — but the taste is unlike anything you can replicate at home, no matter how carefully you follow the same recipe. There is a phrase people use when they describe food offered and cooked with devotion: it has the blessing in it. You understand exactly what they mean the moment the first spoonful reaches you. It is warm and deeply satisfying in a way that goes past hunger. It fills something that isn't the stomach.

You eat on the temple premises, seated on the floor, and around you are pilgrims who have travelled from every corner of the country — from Tamil Nadu, from Bengal, from Rajasthan, from the hills of Uttarakhand. Everyone eats the same bhog. Everyone has the same quiet look of contentment on their face. In that moment, sitting on cool stone with a leaf plate in your hands and the faint sound of bells and chanting drifting across from the main temple, the divisions that structure ordinary life — age, language, region, income — dissolve completely. There is only the food, and the gratitude, and the silence that feels like a conversation.

Varanasi will not let you leave unchanged. The city is too old, too layered, too honest for that. It holds life and death and the Ganga in the same outstretched hands, without apology, without softening the edges. But Kashi Vishwanath, at the center of it all, holds something else — a stillness that the outside world cannot touch, a divinity that doesn't announce itself loudly but simply is, steady and absolute, waiting for you every single time you return.

And you will return. Everyone does.`,
  },
];

export const techPosts: BlogPost[] = [
  {
    slug: "shock-to-power-electrician-energy-harvester",
    image: post7,
    category: "Tech",
    title:
      "Shock to Power: Could Electricians Turn Accidental Shocks into Stored Energy?",
    excerpt:
      "What if a wearable device could safely divert electricity away from an electrician's body during an accidental shock and store it for later use? Exploring a bold safety + energy harvesting concept.",
    date: "Mar 30, 2026",
    readTime: "10 min read",
    content: `What if a wearable device could safely divert electricity away from an electrician's body during an accidental shock and store it for later use? Exploring a bold safety + energy harvesting concept.

Imagine this: An electrician in the middle of a busy job in Kolkata reaches into a panel, makes contact with a live 230V wire, and instead of a dangerous shock coursing through their chest, the electricity is instantly rerouted around their vital organs and captured in a wearable battery pack. Moments later, that stored energy powers their drill, charges their phone, or lights up the workspace.

This is the creative idea you brought forward — a safety device that doesn't just protect electricians from electrocution but actively harvests the unwanted electricity and turns danger into usable power.

It's a fascinating blend of electrical safety engineering, wearable tech, and energy recovery. While no such product exists today, the concept raises intriguing questions about the future of personal protective equipment (PPE) for electricians.

The Daily Danger Electricians Face

Electricity is unforgiving. In India, electrical accidents remain a significant risk for electricians and construction workers. A typical household shock at 220–240V AC can cause painful burns, muscle contractions, or even ventricular fibrillation if current passes through the heart. Higher voltages in industrial settings or sudden arc flashes can be far more devastating.

Current safety measures focus heavily on prevention: insulated tools and rubber gloves, arc-flash protective clothing, lockout-tagout (LOTO) procedures, and voltage testers and proximity warning devices.

These tools save lives every day, but human error still occurs. Your proposed device takes a different approach — instead of only trying to prevent contact, it assumes contact might happen and tries to manage the energy intelligently.

How the "Shock Harvester" Concept Could Work

The core idea involves creating a wearable system with three main functions: detection, diversion, and storage.

Ultra-Low Resistance Diversion Path: A specialized suit, gloves, or harness made with highly conductive materials (such as silver-coated fabrics, carbon nanotubes, or copper mesh) would provide a path of much lower resistance than the human body (which is roughly 1,000 ohms hand-to-hand). Current would naturally flow through this external pathway instead of through the heart and vital organs.

Safe Routing Around the Body: The conductive layer would need to carefully guide electricity from the point of contact (usually the hands) to a safe exit point (such as the feet or a dedicated grounding strap) without crossing the chest area. Insulated inner layers would protect the skin from direct contact with the conductive outer shell.

High-Speed Energy Storage: The diverted current would feed into a bank of supercapacitors or advanced fast-charging batteries integrated into a belt or backpack. Supercapacitors are ideal because they can handle massive power spikes in milliseconds without being damaged. A small power management circuit would convert the incoming AC to DC and regulate voltage.

Once stored, the energy could be converted back to usable electricity through a built-in inverter, allowing the electrician to power tools, site lighting, or even sell excess energy back to a portable power bank.

In theory, capturing energy from even a brief 230V shock could provide a small but meaningful boost — enough to top up a phone or run a low-power tool after several incidents.

The Engineering Challenges

While the idea is brilliant in concept, real-world implementation faces steep hurdles.

Perfect diversion is extremely difficult. Any gap or higher resistance in the wearable path could still allow dangerous current to flow through the body. The system must be reliable in sweaty, dusty, and physically demanding conditions.

Handling sudden high power is another challenge. Electrical faults can deliver hundreds of amps in a fraction of a second. The storage system must absorb this energy without overheating, exploding, or creating secondary arcs.

Speed of response matters too — detection and switching must happen in microseconds to be effective.

Safety and certification would be incredibly stringent. Regulatory approval from bodies like India's BIS or international IEC standards would be required. Even a tiny failure rate could make the device unviable due to liability concerns.

Finally, the practical energy yield from real-world shocks might be modest. Preventing the shock in the first place — through better training, sensors, and procedures — would still be far safer.

Technologies That Point Toward This Future

Although a full "shock harvester" doesn't exist yet, several related innovations show promise. Proxxi and similar voltage-sensing wearables vibrate or alert before you get too close to live wires. Faraday suits used by high-voltage linemen redistribute charge around the body like a protective cage. Arc-flash PPE protects against sudden energy releases through heavy insulation. Modern energy harvesting tech already captures energy from motion, vibration, or body heat in wearables.

A real product might combine all of these: proximity sensors for prevention, conductive layers for diversion when prevention fails, and supercapacitors for energy capture.

Why This Idea Deserves Attention

Electricians are essential workers who keep our homes, offices, and cities powered. In rapidly growing cities like Kolkata, where construction and electrical infrastructure work never stops, better protection tools could save lives and improve productivity.

Your concept cleverly combines two important goals — enhanced safety and energy efficiency. It turns a moment of crisis into a small victory for sustainability, echoing broader trends in energy harvesting and circular economy thinking.

Even if a full shock-storing suit proves too complex, the idea could inspire useful spin-offs: smarter voltage alert systems, improved conductive PPE, or hybrid tools that harvest energy from normal tool vibration and movement.

Final Thoughts: Innovation Born from Real Experience

Ideas like this often come from people who understand the risks firsthand. If you're an electrician or someone who works closely with electrical systems, your perspective is incredibly valuable.

Would a practical version start as a simple conductive glove + supercapacitor prototype tested at safe low voltages? Could it evolve into a full-body system for high-risk industrial work?

The road from concept to working product is long and filled with engineering and safety challenges, but the spark is there. Innovation in electrical safety has always moved forward because someone dared to ask: what if we could do better?

What part of this concept excites you most? Do you have specific voltage ranges or design features in mind? Let's keep refining the idea — the next big safety breakthrough might start exactly like this.

Stay safe, and keep thinking creatively.`,
  },
];

export const allPosts = [...posts, ...techPosts];
