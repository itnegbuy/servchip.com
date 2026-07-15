"use client";

import { MANUFACTURER_COLORS } from "@/data/manufacturer-colors";

interface BrandLogoProps {
  name: string;
  className?: string;
  compact?: boolean;
}

export function BrandLogo({
  name,
  className = "w-8 h-8",
  compact,
}: BrandLogoProps) {
  const color = MANUFACTURER_COLORS[name] || "#6B7280";

  const commonProps = {
    viewBox: "0 0 100 40",
    className,
    fill: "none",
  };

  switch (name) {
    case "NVIDIA":
      return (
        <svg {...commonProps}>
          <path d="M20 10h25v8H20z" fill={color} />
          <path d="M20 22h22v8H20z" fill={color} />
          <rect x="50" y="10" width="8" height="20" rx="1" fill={color} />
          <rect x="62" y="10" width="8" height="20" rx="1" fill={color} />
          <path
            d="M74 10h16q4 0 4 4v3q0 4-4 4h-8q-4 0-4 4v3q0 4 4 4h16"
            stroke={color}
            strokeWidth="2"
            fill="none"
          />
          <rect x="76" y="20" width="6" height="10" rx="1" fill={color} />
        </svg>
      );

    case "AMD":
      return (
        <svg {...commonProps}>
          <path d="M28 12L15 30h10l5-10 5 10h10L32 12z" fill={color} />
          <rect x="50" y="12" width="8" height="18" rx="1" fill={color} />
          <path d="M62 12h10l8 18h-8l-2-5h-6l-2 5h-8z" fill={color} />
          <rect x="64" y="20" width="4" height="3" fill="#fff" />
        </svg>
      );

    case "Intel":
      return (
        <svg {...commonProps}>
          <rect x="10" y="10" width="24" height="24" rx="3" fill={color} />
          <path d="M14 14h8v4h-4v2h4v4h-4v2h4v4h-8z" fill="#fff" />
          <rect x="38" y="10" width="24" height="8" rx="1" fill={color} />
          <rect x="38" y="22" width="24" height="8" rx="1" fill={color} />
          <rect x="66" y="10" width="8" height="24" rx="1" fill={color} />
          <path d="M78 10h12v8H78z" fill={color} />
          <path d="M78 22h12v8H78z" fill={color} />
        </svg>
      );

    case "Broadcom":
      return (
        <svg {...commonProps}>
          <circle cx="28" cy="20" r="14" fill={color} />
          <text
            x="28"
            y="25"
            textAnchor="middle"
            fill="#fff"
            fontSize="20"
            fontWeight="bold"
            fontFamily="Arial"
          >
            B
          </text>
          <rect x="48" y="10" width="10" height="24" rx="2" fill={color} />
          <rect x="62" y="10" width="10" height="24" rx="2" fill={color} />
          <rect x="76" y="10" width="10" height="24" rx="2" fill={color} />
        </svg>
      );

    case "Marvell":
      return (
        <svg {...commonProps}>
          <text
            x="20"
            y="28"
            fill={color}
            fontSize="28"
            fontWeight="bold"
            fontFamily="Arial"
          >
            M
          </text>
          <rect
            x="40"
            y="10"
            width="52"
            height="24"
            rx="2"
            fill={color}
            opacity="0.15"
          />
          <text
            x="66"
            y="27"
            textAnchor="middle"
            fill={color}
            fontSize="13"
            fontWeight="bold"
            fontFamily="Arial"
          >
            MARVELL
          </text>
        </svg>
      );

    case "Cisco":
      return (
        <svg {...commonProps}>
          <rect
            x="8"
            y="8"
            width="28"
            height="28"
            rx="14"
            fill={color}
            opacity="0.15"
          />
          <path d="M16 14l-4 6h8z" fill={color} />
          <path d="M16 26l-4-6h8z" fill={color} />
          <path d="M24 14l4 6h-8z" fill={color} />
          <path d="M24 26l4-6h-8z" fill={color} />
          <rect x="42" y="14" width="8" height="16" rx="1" fill={color} />
          <rect x="54" y="14" width="8" height="16" rx="1" fill={color} />
          <path d="M66 14h14l-7 12h-7z" fill={color} />
          <path d="M66 14h14l7 12h-14z" fill={color} opacity="0.5" />
          <rect x="82" y="14" width="8" height="16" rx="1" fill={color} />
        </svg>
      );

    case "Qualcomm":
      return (
        <svg {...commonProps}>
          <path
            d="M14 20a8 8 0 1116 0 8 8 0 01-16 0z"
            stroke={color}
            strokeWidth="2"
            fill="none"
          />
          <path d="M18 20a4 4 0 118 0 4 4 0 01-8 0z" fill={color} />
          <rect x="36" y="12" width="8" height="18" rx="1" fill={color} />
          <path d="M48 12h14l-7 10z" fill={color} />
          <path d="M55 22h10l-5 8z" fill={color} />
          <text
            x="70"
            y="27"
            fill={color}
            fontSize="12"
            fontWeight="bold"
            fontFamily="Arial"
          >
            QC
          </text>
        </svg>
      );

    case "Samsung":
      return (
        <svg {...commonProps}>
          <ellipse
            cx="28"
            cy="20"
            rx="18"
            ry="12"
            stroke={color}
            strokeWidth="2"
            fill="none"
          />
          <text
            x="28"
            y="25"
            textAnchor="middle"
            fill={color}
            fontSize="14"
            fontWeight="bold"
            fontFamily="Arial"
          >
            S
          </text>
          <rect x="52" y="10" width="8" height="24" rx="1" fill={color} />
          <rect x="64" y="10" width="8" height="24" rx="1" fill={color} />
          <rect x="76" y="10" width="8" height="24" rx="1" fill={color} />
          <rect x="88" y="10" width="8" height="24" rx="1" fill={color} />
        </svg>
      );

    case "SK hynix":
      return (
        <svg {...commonProps}>
          <rect x="6" y="6" width="32" height="32" rx="6" fill={color} />
          <text
            x="22"
            y="28"
            textAnchor="middle"
            fill="#fff"
            fontSize="18"
            fontWeight="bold"
            fontFamily="Arial"
          >
            SK
          </text>
          <text
            x="46"
            y="27"
            fill={color}
            fontSize="11"
            fontWeight="bold"
            fontFamily="Arial"
          >
            hynix
          </text>
        </svg>
      );

    case "Micron":
      return (
        <svg {...commonProps}>
          <rect x="6" y="6" width="32" height="32" rx="8" fill={color} />
          <text
            x="22"
            y="27"
            textAnchor="middle"
            fill="#fff"
            fontSize="16"
            fontWeight="bold"
            fontFamily="Arial"
          >
            M
          </text>
          <text
            x="46"
            y="27"
            fill={color}
            fontSize="14"
            fontWeight="bold"
            fontFamily="Arial"
          >
            MICRON
          </text>
        </svg>
      );

    case "Seagate":
      return (
        <svg {...commonProps}>
          <path d="M8 20h12l6-10h4l-8 14h-6l4-14h-4z" fill={color} />
          <rect x="38" y="10" width="8" height="16" rx="1" fill={color} />
          <path d="M50 10h14l-5 8h-4z" fill={color} />
          <rect x="60" y="20" width="4" height="6" rx="1" fill={color} />
          <path d="M68 10h14" stroke={color} strokeWidth="2" />
          <text
            x="75"
            y="28"
            textAnchor="middle"
            fill={color}
            fontSize="10"
            fontWeight="bold"
            fontFamily="Arial"
          >
            SEAGATE
          </text>
        </svg>
      );

    case "Dell Technologies":
    case "Dell":
      return (
        <svg {...commonProps}>
          <ellipse cx="24" cy="20" rx="14" ry="14" fill={color} />
          <text
            x="24"
            y="26"
            textAnchor="middle"
            fill="#fff"
            fontSize="18"
            fontWeight="bold"
            fontFamily="Arial"
          >
            D
          </text>
          <text
            x="44"
            y="27"
            fill={color}
            fontSize="14"
            fontWeight="bold"
            fontFamily="Arial"
          >
            DELL
          </text>
        </svg>
      );

    case "Hewlett Packard Enterprise":
    case "HPE":
      return (
        <svg {...commonProps}>
          <rect x="8" y="10" width="28" height="24" rx="2" fill={color} />
          <text
            x="22"
            y="27"
            textAnchor="middle"
            fill="#fff"
            fontSize="16"
            fontWeight="bold"
            fontFamily="Arial"
          >
            H
          </text>
          <rect x="42" y="10" width="20" height="8" rx="1" fill={color} />
          <rect x="42" y="22" width="20" height="8" rx="1" fill={color} />
          <text
            x="52"
            y="36"
            textAnchor="middle"
            fill={color}
            fontSize="10"
            fontWeight="bold"
            fontFamily="Arial"
          >
            HPE
          </text>
        </svg>
      );

    case "Supermicro":
      return (
        <svg {...commonProps}>
          <rect x="8" y="8" width="28" height="28" rx="4" fill={color} />
          <text
            x="22"
            y="27"
            textAnchor="middle"
            fill="#fff"
            fontSize="18"
            fontWeight="bold"
            fontFamily="Arial"
          >
            S
          </text>
          <text
            x="42"
            y="27"
            fill={color}
            fontSize="11"
            fontWeight="bold"
            fontFamily="Arial"
          >
            SUPERMICRO
          </text>
        </svg>
      );

    case "Lenovo":
      return (
        <svg {...commonProps}>
          <rect x="6" y="10" width="30" height="24" rx="4" fill={color} />
          <text
            x="21"
            y="27"
            textAnchor="middle"
            fill="#fff"
            fontSize="16"
            fontWeight="bold"
            fontFamily="Arial"
          >
            L
          </text>
          <text
            x="42"
            y="27"
            fill={color}
            fontSize="14"
            fontWeight="bold"
            fontFamily="Arial"
          >
            Lenovo
          </text>
        </svg>
      );

    case "Gigabyte":
    case "GIGABYTE":
    case "GIGABYTE Technology":
      return (
        <svg {...commonProps}>
          <rect x="6" y="6" width="32" height="32" rx="4" fill={color} />
          <text
            x="22"
            y="26"
            textAnchor="middle"
            fill="#fff"
            fontSize="14"
            fontWeight="bold"
            fontFamily="Arial"
          >
            G
          </text>
          <text
            x="44"
            y="27"
            fill={color}
            fontSize="10"
            fontWeight="bold"
            fontFamily="Arial"
          >
            GIGABYTE
          </text>
        </svg>
      );

    case "ASUS":
      return (
        <svg {...commonProps}>
          <rect x="6" y="6" width="32" height="32" rx="18" fill={color} />
          <text
            x="22"
            y="26"
            textAnchor="middle"
            fill="#fff"
            fontSize="16"
            fontWeight="bold"
            fontFamily="Arial"
          >
            A
          </text>
          <text
            x="44"
            y="27"
            fill={color}
            fontSize="14"
            fontWeight="bold"
            fontFamily="Arial"
          >
            ASUS
          </text>
        </svg>
      );

    case "Inspur":
      return (
        <svg {...commonProps}>
          <rect x="8" y="8" width="28" height="28" rx="2" fill={color} />
          <text
            x="22"
            y="27"
            textAnchor="middle"
            fill="#fff"
            fontSize="16"
            fontWeight="bold"
            fontFamily="Arial"
          >
            I
          </text>
          <text
            x="42"
            y="27"
            fill={color}
            fontSize="12"
            fontWeight="bold"
            fontFamily="Arial"
          >
            Inspur
          </text>
        </svg>
      );

    case "Quanta":
    case "Quanta Computer":
      return (
        <svg {...commonProps}>
          <rect x="8" y="8" width="28" height="28" rx="14" fill={color} />
          <text
            x="22"
            y="27"
            textAnchor="middle"
            fill="#fff"
            fontSize="16"
            fontWeight="bold"
            fontFamily="Arial"
          >
            Q
          </text>
          <text
            x="42"
            y="27"
            fill={color}
            fontSize="12"
            fontWeight="bold"
            fontFamily="Arial"
          >
            Quanta
          </text>
        </svg>
      );

    case "Foxconn":
      return (
        <svg {...commonProps}>
          <rect x="8" y="8" width="28" height="28" rx="2" fill={color} />
          <text
            x="22"
            y="27"
            textAnchor="middle"
            fill="#fff"
            fontSize="16"
            fontWeight="bold"
            fontFamily="Arial"
          >
            F
          </text>
          <text
            x="42"
            y="27"
            fill={color}
            fontSize="11"
            fontWeight="bold"
            fontFamily="Arial"
          >
            Foxconn
          </text>
        </svg>
      );

    case "Wiwynn":
      return (
        <svg {...commonProps}>
          <rect x="8" y="8" width="28" height="28" rx="2" fill={color} />
          <text
            x="22"
            y="27"
            textAnchor="middle"
            fill="#fff"
            fontSize="16"
            fontWeight="bold"
            fontFamily="Arial"
          >
            W
          </text>
          <text
            x="42"
            y="27"
            fill={color}
            fontSize="12"
            fontWeight="bold"
            fontFamily="Arial"
          >
            Wiwynn
          </text>
        </svg>
      );

    case "Solidigm":
      return (
        <svg {...commonProps}>
          <rect x="8" y="8" width="28" height="28" rx="4" fill={color} />
          <text
            x="22"
            y="27"
            textAnchor="middle"
            fill="#fff"
            fontSize="14"
            fontWeight="bold"
            fontFamily="Arial"
          >
            S
          </text>
          <text
            x="42"
            y="27"
            fill={color}
            fontSize="10"
            fontWeight="bold"
            fontFamily="Arial"
          >
            Solidigm
          </text>
        </svg>
      );

    case "Kioxia":
      return (
        <svg {...commonProps}>
          <rect x="8" y="8" width="28" height="28" rx="4" fill={color} />
          <text
            x="22"
            y="27"
            textAnchor="middle"
            fill="#fff"
            fontSize="14"
            fontWeight="bold"
            fontFamily="Arial"
          >
            K
          </text>
          <text
            x="42"
            y="27"
            fill={color}
            fontSize="12"
            fontWeight="bold"
            fontFamily="Arial"
          >
            KIOXIA
          </text>
        </svg>
      );

    case "Western Digital":
    case "WD":
      return (
        <svg {...commonProps}>
          <rect x="8" y="8" width="28" height="28" rx="4" fill={color} />
          <text
            x="22"
            y="27"
            textAnchor="middle"
            fill="#fff"
            fontSize="14"
            fontWeight="bold"
            fontFamily="Arial"
          >
            WD
          </text>
          <text
            x="42"
            y="27"
            fill={color}
            fontSize="10"
            fontWeight="bold"
            fontFamily="Arial"
          >
            WD
          </text>
        </svg>
      );

    case "Google":
      return (
        <svg {...commonProps}>
          <rect x="6" y="6" width="32" height="32" rx="16" fill={color} />
          <text
            x="22"
            y="27"
            textAnchor="middle"
            fill="#fff"
            fontSize="18"
            fontWeight="bold"
            fontFamily="Arial"
          >
            G
          </text>
          <text
            x="44"
            y="27"
            fill={color}
            fontSize="14"
            fontWeight="bold"
            fontFamily="Arial"
          >
            Google
          </text>
        </svg>
      );

    case "Amazon":
      return (
        <svg {...commonProps}>
          <rect x="6" y="6" width="32" height="32" rx="2" fill={color} />
          <text
            x="22"
            y="27"
            textAnchor="middle"
            fill="#fff"
            fontSize="18"
            fontWeight="bold"
            fontFamily="Arial"
          >
            A
          </text>
          <text
            x="44"
            y="27"
            fill={color}
            fontSize="14"
            fontWeight="bold"
            fontFamily="Arial"
          >
            Amazon
          </text>
        </svg>
      );

    case "Ampere":
      return (
        <svg {...commonProps}>
          <path d="M8 20l6-12h8l6 12-6 12h-8z" fill={color} opacity="0.2" />
          <path d="M14 20l4-8h4l4 8-4 8h-4z" fill={color} />
          <text
            x="40"
            y="27"
            fill={color}
            fontSize="14"
            fontWeight="bold"
            fontFamily="Arial"
          >
            Ampere
          </text>
        </svg>
      );

    case "Nokia":
      return (
        <svg {...commonProps}>
          <rect x="6" y="6" width="32" height="32" rx="6" fill={color} />
          <text
            x="22"
            y="27"
            textAnchor="middle"
            fill="#fff"
            fontSize="16"
            fontWeight="bold"
            fontFamily="Arial"
          >
            N
          </text>
          <text
            x="44"
            y="27"
            fill={color}
            fontSize="14"
            fontWeight="bold"
            fontFamily="Arial"
          >
            NOKIA
          </text>
        </svg>
      );

    default: {
      const initials = name
        .split(/[\s-]+/)
        .map((w) => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

      if (compact) {
        return (
          <div
            className="flex items-center justify-center rounded-lg shrink-0"
            style={{ backgroundColor: `${color}22` }}
          >
            <span
              style={{ color }}
              className="text-[10px] font-black font-mono"
            >
              {initials}
            </span>
          </div>
        );
      }

      return (
        <svg {...commonProps}>
          <rect
            x="4"
            y="4"
            width="36"
            height="36"
            rx="8"
            fill={color}
            opacity="0.15"
          />
          <text
            x="22"
            y="28"
            textAnchor="middle"
            fill={color}
            fontSize="18"
            fontWeight="bold"
            fontFamily="monospace"
          >
            {initials}
          </text>
          <text
            x="46"
            y="27"
            fill={color}
            fontSize="12"
            fontWeight="bold"
            fontFamily="Arial"
          >
            {name}
          </text>
        </svg>
      );
    }
  }
}
