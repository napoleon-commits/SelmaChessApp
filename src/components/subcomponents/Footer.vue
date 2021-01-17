<template>
    <v-footer padless>
        <v-row justify="center" no-gutters>
            <v-tooltip bottom v-for="object in iconObjects" :key="object.icon">
                <template v-slot:activator="{ on }">
                    <v-btn
                        class="mx-4 my-4"
                        icon
                        :href="object.href"
                        target="_blank"
                        v-on="on"
                    >
                        <v-icon size="24px">{{ object.icon }}</v-icon>
                    </v-btn>
                </template>
                <span>{{object.tooltip}}</span>
            </v-tooltip>
            <v-col class="py-4 text-center" cols="12">
                <div class="mx-3">
                    "We must make sure that chess will not be like a dead language; very intersting but for a small group."
                </div>
            </v-col>
            <v-divider></v-divider>
            <v-col class="py-4 text-center" cols="12">
                <div class="mx-3">
                    {{ new Date().getFullYear() }} — a Byron J-Mil Hall production
                </div>
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
                href: 'mailto: selmachessapp@gmail.com',
                tooltip: 'Send An Email',
            },
            {
                icon: 'mdi-github',
                href: 'https://github.com/napoleon-commits/SelmaChessApp/tree/fivemonths',
                tooltip: 'View GitHub Repository',
            },
        ],
    }),
}
</script>

<style>

</style>