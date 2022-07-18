export const getAge = (birth: string, death: string | null) =>  {
    const birthDate = new Date(birth)
    const lastDate = death ? new Date(death) : new Date()
    let age = lastDate.getFullYear() - birthDate.getFullYear()
    const m = lastDate.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && lastDate.getDate() < birthDate.getDate())) {
        age--
    }
    return age
}