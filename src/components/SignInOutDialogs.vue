

<!-- This component displays authentication dialogs using AWS Amplify -->
<script setup lang="ts">
import { DialogState } from '@/types/DialogState';
import { inject } from 'vue';
import { useAuthStore } from '@/store/auth';
import { signOut } from 'aws-amplify/auth';

import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";

import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

// Inject dialog state from context
const authDialogSignOutState = inject<DialogState>('authDialogSignOutState', { showDialog: false });
const authDialogSignInState = inject<DialogState>('authDialogSignInState', { showDialog: false });

const authStore = useAuthStore();

function closeDialog() {
    authDialogSignOutState.showDialog = false;
    authDialogSignInState.showDialog = false;
}

function signOutUser() {
    signOut();
    authStore.userAuthenticated = false;
    authDialogSignOutState.showDialog = false;
}
</script>

<template>
    <!-- Sign In Dialog using Authenticator -->
    <v-dialog
        v-model="authDialogSignInState.showDialog"
        width="unset"
        transition="dialog-top-transition"
        persistent
    >
        <authenticator>
            <template v-slot="{ signOut, user }">
                <v-card title="Welcome" color="primary" class="pa-4">
                    <v-card-text>
                        Hello, <strong>{{ user.username }}</strong>!<br />
                        You have successfully signed in.
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text="Continue" @click="closeDialog" color="white" variant="flat" />
                    </v-card-actions>
                </v-card>
            </template>
        </authenticator>
    </v-dialog>

    <!-- Sign Out Dialog -->
    <v-dialog
        v-model="authDialogSignOutState.showDialog"
        width="unset"
        transition="dialog-top-transition"
    >
        <v-card title="Sign Out?" color="warning">
            <v-card-text>
                Are you sure you want to sign out?
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text="Sign Out" @click="signOutUser" />
                <v-btn text="Cancel" @click="closeDialog" />
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
