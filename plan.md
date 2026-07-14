# Servchip Restructuring Plan — Gaming → Industrial

**Start Date:** 14 July 2026  
**Last Updated:** 14 July 2026 — 02:00 AM  
**Status:** ✅ All Phases Complete (Build: 62 pages, 0 errors)

---

## ✅ Phase 0 — Foundation & Data Architecture (COMPLETE)

**Goal:** Create data infrastructure for industrial product catalog

### [14 Jul 01:00] Task 0.1 — Create plan.md
- ✓ Write tracking document with all phases
- ✓ Define checklist for each phase

### [14 Jul 01:00] Task 0.2 — Redesign TypeScript types
- ✓ Update `src/types/chip.ts` → Add: `ServerProduct`, `NetworkingProduct`, `MemoryProduct`, `StorageProduct`
- ✓ Update `src/types/index.ts` → Export new types

### [14 Jul 01:00] Task 0.3 — Create manufacturer-wise data structure
- ✓ `src/data/products/manufacturers/nvidia.ts` — 7 AI GPUs + Grace CPU + 4 networking
- ✓ `src/data/products/manufacturers/amd.ts` — 4 Instinct GPUs + 3 EPYC CPUs + Pensando
- ✓ `src/data/products/manufacturers/intel.ts` — 5 Xeon CPUs + 2 Gaudi + 2 Arc + 1 NIC
- ✓ `src/data/products/servers/index.ts` — 15 servers from 10 OEMs
- ✓ `src/data/products/networking/` — Broadcom, Marvell, Cisco, NVIDIA networking
- ✓ `src/data/products/memory/index.ts` — SK hynix, Samsung, Micron HBM3E + DDR5 + MRDIMM + CXL
- ✓ `src/data/products/storage/index.ts` — Samsung, Micron, Solidigm, Kioxia, WD, Seagate
- ✓ `src/data/products/manufacturers/google.ts` — TPU v6/v7
- ✓ `src/data/products/manufacturers/amazon.ts` — Trainium 2, Inferentia 2
- ✓ `src/data/products/manufacturers/qualcomm.ts` — DC CPU
- ✓ `src/data/products/manufacturers/ampere.ts` — AmpereOne
- ✓ `src/data/products/index.ts` — barrel file with helper functions

### [14 Jul 01:00] Task 0.4 — Update main chips.ts
- ✓ Now imports from `ALL_CHIP_PRODUCTS` in new data structure
- ✓ All helper functions preserved
- ✓ Backward compatible

---

## ✅ Phase 1 — Company-Wise Categories (COMPLETE)

### [14 Jul 01:00] Task 1.1 — Restructure categories.ts
- 10 new categories matching manufacturer/product groups:
  1. NVIDIA Data Center GPUs
  2. AMD Instinct Accelerators
  3. Intel Gaudi AI Accelerators
  4. Google TPU Accelerators
  5. Amazon AI Chips
  6. Server CPUs
  7. AI Servers & Platforms
  8. Networking & Interconnects
  9. AI Memory & HBM
  10. Enterprise Storage

### [14 Jul 01:00] Task 1.2 — Restructure manufacturers.ts
- 27 manufacturers total (was 4):
  - Chips: NVIDIA, AMD, Intel, Google, Amazon, Qualcomm, Ampere
  - Networking: Broadcom, Marvell, Cisco
  - Servers: Dell, HPE, Supermicro, Lenovo, Gigabyte, ASUS, Inspur, Quanta, Foxconn, Wiwynn
  - Memory: Samsung, SK hynix, Micron
  - Storage: Solidigm, Kioxia, Western Digital, Seagate
  - Legacy: Nokia (kept)
- Each with proper categories, subcategories, and chipIds linking to data

---

## ✅ Phase 2 — UI Transformation (COMPLETE)

### [14 Jul 01:30] Task 2.1 — Homepage restructure
- Remove GamingChips from default render flow
- Reorder sections (CategoriesGrid moved up for prominence)
- New order: Hero3D → TrustBar → CategoriesGrid → QuickLinks → StatsCounter → FeaturedChips → Technology → WhyServchip → ComparisonPreview → HowItWorks → Testimonials → Blog → CTA

### [14 Jul 01:30] Task 2.2 — Add 3D Chip Hide/Unhide Toggle
- Created `src/components/ui/ChipToggle.tsx` — shows chip icon, toggles 3D chip visibility
- Added to Header.tsx next to ColorPicker (line 407 area)
- Uses localStorage key `servchip-show3d`
- Default: hidden (industrial mode) when toggle is off, shown when toggled on
- Hero3D listens for toggle events and hides/shows the 3D chip visual accordingly
- Toggle button shows chip outline when hidden, X-over-chip when visible

### [14 Jul 01:30] Task 2.3 — Update ChipFilters
- Added Manufacturer filter (dynamic from all chips)
- Added Architecture filter (dynamic)
- Added Series filter (dynamic)
- All filters use dynamic values from actual data

### [14 Jul 01:30] Task 2.4 — Update ChipGrid
- Added manufacturer filter support
- Dynamic category matching (prefix-based)
- Manufacturer badge in list view
- Performance optimization with useMemo

---

## ✅ Phase 3 — Product Data Population (COMPLETE)

All 9 categories from user's list populated:

| # | Category | Count | Details |
|---|----------|-------|---------|
| 1 | AI GPU Chips | 12 | NVIDIA GB200→L4, AMD MI350X→MI300X, Intel Gaudi 3 |
| 2 | Server CPUs | 8 | AMD EPYC 9755/9655/9654, Intel Xeon 6900/6700/Max/6980P/8490H, Grace, AmpereOne, Qualcomm |
| 3 | AI Servers | 15 | Dell XE9680/XE8640, HPE Cray/ProLiant, Supermicro AS/SYS, Lenovo SR, Gigabyte, ASUS, Inspur, Quanta, Foxconn, Wiwynn |
| 4 | Networking | 8 | NVIDIA Spectrum/Quantum/ConnectX/BlueField, Broadcom Tomahawk/Jericho, Marvell Teralynx, Cisco Silicon One, Intel E810 |
| 5 | AI Memory | 7 | SK hynix/Samsung/Micron HBM3E, DDR5 RDIMM ×2, MRDIMM, CXL |
| 6 | Enterprise Storage | 6 | Samsung PM1743/PM9D3, Micron 9550, Solidigm D7, Kioxia CM7, WD SN655, Seagate Nytro |
| 7 | Server OEMs | 10 | Dell, HPE, Supermicro, Lenovo, Gigabyte, ASUS, Inspur, Quanta, Foxconn, Wiwynn |
| 8 | Cloud AI Chips | 4 | Google TPU v6/v7, Amazon Trainium 2/Inferentia 2 |
| 9 | Other CPUs | 2 | AmpereOne, Qualcomm DC CPU |

**Total: ~60+ products across 27 manufacturers**

---

## ✅ Phase 4 — Build Verification (COMPLETE)

- ✓ TypeScript: 0 errors (src/ only)
- ✓ Next.js Build: 62 pages generated
- ✓ All routes working: products, categories, manufacturers
- ✓ Server Components + Client Components pattern maintained
- ✓ Dynamic filtering with manufacturer, architecture, series, status
- ✓ 3D chip toggle in header

---

## 📋 Future / Enhancement Ideas

| Item | Description |
|------|-------------|
| 🔲 Product detail pages | Enhance for ServerProduct, NetworkingProduct, etc. |
| 🔲 Advanced comparison | Add servers/networking/memory comparisons |
| 🔲 Search enhancement | Global search across all product types |
| 🔲 Pagination | For 60+ products on listing pages |
| 🔲 Filters refinement | Add price range, memory size sliders |
| 🔲 GamingChips toggle | Optional: add show/hide toggle for GamingChips section |
| 🔲 JSON export | Generate downloadable product catalog JSON |
| 🔲 PDF datasheets | Link to manufacturer PDFs |

---
