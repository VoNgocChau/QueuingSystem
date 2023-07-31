// export interface Device {
//     id?: string;
//     deviceCode: string;
//     deviceName: string;
//     ipAddress: string;
//     activeStatus: boolean;
//     connectionStatus: boolean;
//     serviceUse: string[];
// }

// interface.ts
export interface Device {
    // Define your properties here.
    id: string ;
    deviceCode: string;
    deviceName: string;
    ipAddress: string;
    deviceType: string;
    userName: string;
    password: string;
    serviceUse: string[];
    activeStatus?: boolean;
    connectionStatus?: boolean;
}

export interface ServiceType {
    id: string;
    serviceCode: string;
    serviceName: string;
    description: string;
    activeStatus: string;
}