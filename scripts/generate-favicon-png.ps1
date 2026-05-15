Add-Type -AssemblyName System.Drawing
# Gera apenas ícones quadrados (favicon 32 + Apple Touch).
# Não altera public/logo.png — use a arte oficial da clínica nesse arquivo.
$public = Join-Path (Split-Path $PSScriptRoot -Parent) "public"

# Favicon / aba: marca quadrada (complementa logo.png no index.html)
$favPath = Join-Path $public "favicon-32.png"
$sq = New-Object System.Drawing.Bitmap 32, 32
$g = [System.Drawing.Graphics]::FromImage($sq)
$g.SmoothingMode = "AntiAlias"
$g.Clear([System.Drawing.Color]::FromArgb(255, 11, 44, 102))
$b = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 102, 194, 58))
$g.FillEllipse($b, 6, 6, 20, 20)
$g.Dispose()
$b.Dispose()
$sq.Save($favPath, [System.Drawing.Imaging.ImageFormat]::Png)
$sq.Dispose()

# Apple touch (iOS / atalhos)
$applePath = Join-Path $public "apple-touch-icon.png"
$ap = New-Object System.Drawing.Bitmap 180, 180
$ga = [System.Drawing.Graphics]::FromImage($ap)
$ga.SmoothingMode = "AntiAlias"
$ga.Clear([System.Drawing.Color]::FromArgb(255, 11, 44, 102))
$ba = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 102, 194, 58))
$ga.FillEllipse($ba, 40, 40, 100, 100)
$ga.Dispose()
$ba.Dispose()
$ap.Save($applePath, [System.Drawing.Imaging.ImageFormat]::Png)
$ap.Dispose()

Write-Host "Wrote $favPath"
Write-Host "Wrote $applePath"
