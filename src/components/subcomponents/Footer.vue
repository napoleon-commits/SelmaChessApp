<template>
    <v-footer padless>
        <v-row justify="center" no-gutters>
            <v-btn
                v-for="object in iconObjects"
                :key="object.icon"
                class="mx-4 my-4"
                icon
                :href="object.href"
                target="_blank"
            >
                <v-icon size="24px">{{ object.icon }}</v-icon>
            </v-btn>
            <v-col class="py-4 text-center" cols="12">
                "We must make sure that chess will not be like a dead language; very intersting but for a small group."
            </v-col>
            <v-divider></v-divider>
            <v-col class="py-4 text-center" cols="12">
                {{ new Date().getFullYear() }} — a Byron J-Mil Hall production
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
export default {
    name: 'Footer',
    data: () => ({
        iconObjects: [
            {
                icon: 'mdi-email',
                href: 'mailto: selmachessapp@gmail.com'
            },
            {
                icon: 'mdi-github',
                href: 'https://github.com/napoleon-commits/selmachess'
            },
        ],
    }),
}
</script>

<style>

</style>