<template>
    <div>

        <section class="py-5">
            <div class="row marginnnnnz">
                <div class="col-md-6 my-auto">
                    <h2 class="display-4">Ihre Karriere</h2>
                    <p class="lead text-muted mb-4">Wir sind immer an <span class="hashtag">Querdenkern und kreativen
                            Köpfen</span> interessiert.
                        Wenn Sie die Motivation und Bereitschaft haben, etwas zu bewegen, dann schreiben Sie uns.
                    </p>

                    <PrimaryButton href="mailto:kontakt@wagner-architekt.de">
                        <template v-slot:title>
                            Kontakt
                        </template>
                    </PrimaryButton>
                </div>
                <div class="col-md-6"><img class="img-fluid drop-shadow mt-4 mt-md-0"
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2378&q=80"" alt=""></div>
            </div>
          </section>
        </div>

</template>

<script>
    import PrimaryButton from '@/components/PrimaryButton'

    export default {
        components: {
            PrimaryButton
        }
    }
</script>

<style scoped>
.marginnnnnz {
    margin-top: 6rem !important;
    margin-bottom: 6rem !important;
}
</style>