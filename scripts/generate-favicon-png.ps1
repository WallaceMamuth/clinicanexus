Add-Type -AssemblyName System.Drawing
# Gera marca PNG para favicon / header / Apple Touch.
# Quando a clínica tiver o arquivo oficial, substitua public/logo.png manualmente
# e mantenha favicon-32.png + apple-touch-icon.png alinhados (ou rode este script só para os quadrados).
$public = Join-Path (Split-Path $PSScriptRoot -Parent) "public"

# Favicon / tab: square mark
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

# Header logo asset (wide) — substitua por arte oficial da clínica quando disponível
$logoPath = Join-Path $public "logo.png"
$w, $h = 360, 96
$lb = New-Object System.Drawing.Bitmap $w, $h
$gl = [System.Drawing.Graphics]::FromImage($lb)
$gl.SmoothingMode = "AntiAlias"
$gl.TextRenderingHint = "AntiAlias"
$gl.Clear([System.Drawing.Color]::FromArgb(0, 0, 0, 0))
$font = [System.Drawing.Font]::new(
    "Segoe UI",
    22.0,
    [System.Drawing.FontStyle]::Bold,
    [System.Drawing.GraphicsUnit]::Pixel
)
$fontSmall = [System.Drawing.Font]::new(
    "Segoe UI",
    11.0,
    [System.Drawing.FontStyle]::Regular,
    [System.Drawing.GraphicsUnit]::Pixel
)
$navy = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 11, 44, 102))
$green = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 102, 194, 58))
$white = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 255, 255, 255))
$round = New-Object System.Drawing.Drawing2D.GraphicsPath
$round.AddArc(0, 0, 20, 20, 180, 90)
$round.AddArc($w - 21, 0, 20, 20, 270, 90)
$round.AddArc($w - 21, $h - 21, 20, 20, 0, 90)
$round.AddArc(0, $h - 21, 20, 20, 90, 90)
$round.CloseFigure()
$gl.FillPath($navy, $round)
$gl.DrawString("Cl`u{00ED}nica Nexus", $font, $white, 18, 18)
$gl.DrawString("Sa`u{00FA}de e Bem-Estar", $fontSmall, $green, 18, 58)
$font.Dispose()
$fontSmall.Dispose()
$navy.Dispose()
$green.Dispose()
$white.Dispose()
$gl.Dispose()
$lb.Save($logoPath, [System.Drawing.Imaging.ImageFormat]::Png)
$lb.Dispose()

# Apple touch (iOS home screen / bookmarks)
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
Write-Host "Wrote $logoPath"
Write-Host "Wrote $applePath"
