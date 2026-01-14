export interface GuestWish {
  id: string;
  name: string;
  message: string;
  timestamp: number;
}

export interface CoupleData {
  groom: string;
  bride: string;
  poem: string;
  parents: {
    groom: { father: string; mother: string };
    bride: { father: string; mother: string };
  };
  reception: {
    time: string;
    displayDate: string;
    fullDate: string; // For calendar logic if needed, or text display
    venue: string;
    address: string;
    mapUrl: string;
  };
  ceremony: {
    time: string;
    displayDate: string;
    venue: string;
    address: string;
  };
}

export const WEDDING_DATA: CoupleData = {
  groom: "Quang Vinh",
  bride: "Xuân Ánh",
  poem: "Sự hiện diện của quý vị là niềm vinh hạnh của chúng tôi",
  parents: {
    groom: { 
      father: "Lê Quốc Thái", 
      mother: "Trương Thị Thắm" 
    },
    bride: { 
      father: "Nguyễn Xuân Tiến", 
      mother: "Nguyễn Thị Minh Yến" 
    }
  },
  reception: {
    time: "17:00 PM",
    displayDate: "24.01.2026",
    fullDate: "Thứ 7, 24.01.2026",
    venue: "Trống Đồng Palace",
    address: "65 Quán Sứ, Trần Hưng Đạo, Hoàn Kiếm, Hà Nội",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Trong+Dong+Palace+65+Quan+Su"
  },
  ceremony: {
    time: "09:00 AM",
    displayDate: "24.01.2026",
    venue: "Tư Gia",
    address: "Số 12, Ngõ 44 Nguyễn Đình Chiểu, Phường Hai Bà Trưng, Hà Nội"
  }
};