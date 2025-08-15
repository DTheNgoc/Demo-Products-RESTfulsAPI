import React from 'react'

function QRCodeSection() {
    return (
        <div className="mb-6">
            <p className="text-gray-700 mb-2">Quét mã QR bằng ứng dụng ngân hàng:</p>
            <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=ThanhToan_DonHang_NguyenLieu_NauAn"
                alt="QR Code"
                className="mx-auto border rounded-md"
            />
        </div>
    )
}

export default QRCodeSection
