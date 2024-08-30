
//2427bc4c-96f8-4b27-950c-ca23475d1093

export const formatUUID = (uuid: string) => {
    if (!uuid){
        return uuid;
    }

    return uuid.substring(0, 8)
  };